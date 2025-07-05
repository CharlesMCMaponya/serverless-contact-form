/**
 * SERVERLESS CONTACT FORM WITH AI SPAM FILTER
 * Developed by Charles Maponya
 * GitHub: https://github.com/CharlesMaponya
 * AWS Region: af-south-1
 */

const AWS = require('aws-sdk');
const uuid = require('uuid');

exports.handler = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const comprehend = new AWS.Comprehend();
  
  const { name, email, message } = JSON.parse(event.body);
  
  // AI Spam Detection
  const spamResult = await comprehend.classifyDocument({
    EndpointArn: process.env.CLASSIFIER_ARN,
    Text: message
  }).promise();
  
  const isSpam = spamResult.Classes.some(c => c.Name === 'SPAM' && c.Score > 0.7);
  
  // Save to DynamoDB
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      messageId: uuid.v4(),
      name,
      email,
      message,
      isSpam,
      timestamp: new Date().toISOString()
    }
  };
  
  await dynamoDb.put(params).promise();
  
  // Send email if not spam
  if (!isSpam) {
    const ses = new AWS.SES();
    await ses.sendEmail({
      Source: 'contact@yourdomain.com',
      Destination: { ToAddresses: ['admin@yourdomain.com'] },
      Message: {
        Subject: { Data: `New Contact: ${name}` },
        Body: { Text: { Data: `From: ${email}\n\n${message}` }
      }
    }).promise();
  }
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      message: 'Form submitted successfully',
      isSpam
    })
  };
};
