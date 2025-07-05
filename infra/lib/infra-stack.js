const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigw = require('aws-cdk-lib/aws-apigateway');
const dynamodb = require('aws-cdk-lib/aws-dynamodb');
const iam = require('aws-cdk-lib/aws-iam');

class InfraStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create DynamoDB Table
    const contactsTable = new dynamodb.Table(this, 'ContactsTable', {
      partitionKey: { name: 'messageId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // Create Lambda Function
    const formHandler = new lambda.Function(this, 'FormHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('./src'),
      handler: 'form.handler',
      environment: {
        TABLE_NAME: contactsTable.tableName
      }
    });

    // Grant Permissions
    contactsTable.grantReadWriteData(formHandler);

    // Create API Gateway
    const api = new apigw.RestApi(this, 'ContactFormApi', {
      defaultCorsPreflightOptions: {
        allowOrigins: apigw.Cors.ALL_ORIGINS,
        allowMethods: apigw.Cors.ALL_METHODS
      }
    });
    
    const submitResource = api.root.addResource('submit');
    submitResource.addMethod('POST', new apigw.LambdaIntegration(formHandler));

    // Outputs
    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url + 'submit'
    });
    
    new cdk.CfnOutput(this, 'DeveloperCredit', {
      value: 'Developed by Charles Maponya - Johannesburg'
    });
  }
}

module.exports = { InfraStack };
