mport * as cdk from 'aws-cdk-lib';
iimport * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as comprehend from 'aws-cdk-lib/aws-comprehend';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Watermark comment
    // Project developed by Charles Maponya
    // GitHub: https://github.com/CharlesMaponya
    // AWS Region: af-south-1 (Johannesburg)

    // DynamoDB Table
    const contactsTable = new dynamodb.Table(this, 'ContactsTable', {
      partitionKey: { name: 'messageIdmport { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
