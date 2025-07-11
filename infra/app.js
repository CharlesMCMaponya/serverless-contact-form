const cdk = require('aws-cdk-lib');
const { InfraStack } = require('./lib/infra-stack');

const app = new cdk.App();
new InfraStack(app, 'InfraStack', {
  env: {
    region: 'af-south-1'
  }
});
