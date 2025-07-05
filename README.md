# Serverless Contact Form

A serverless contact form application built using AWS Cloud services and modern web technologies.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a scalable, serverless contact form application leveraging **AWS Cloud** infrastructure using AWS CDK, Lambda, API Gateway, and DynamoDB. It includes a simple frontend interface for submitting messages and a backend infrastructure to handle, process, and store submissions securely and efficiently.

---

## Features

- Serverless architecture on AWS (Lambda, API Gateway, DynamoDB)
- Infrastructure as code using AWS CDK (TypeScript)
- Simple, responsive frontend form
- Secure data storage and processing
- Easy to deploy and maintain
- Automated tests for infrastructure

---

## Tech Stack

- **Frontend:** HTML, JavaScript
- **Backend:** AWS Lambda (Node.js)
- **Infrastructure:** AWS CDK (TypeScript)
- **Database:** AWS DynamoDB
- **Deployment:** AWS CloudFormation via CDK

---

## Architecture

User --> Frontend Form --> API Gateway --> AWS Lambda --> DynamoDB

- The frontend captures user input and sends it to API Gateway.
- API Gateway triggers AWS Lambda function.
- Lambda validates and stores data into DynamoDB.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CharlesMCMaponya/serverless-contact-form.git
   cd serverless-contact-form/infra

2.Install dependencies:
npm install

3.Bootstrap your AWS environment (if not done):
cdk bootstrap

Usage
To deploy the infrastructure:
cdk deploy
After deployment, open the frontend index.html in a browser or serve it via any static hosting to use the contact form.

Deployment
Infrastructure is deployed using AWS CDK.

Lambda functions and API Gateway are provisioned automatically.

DynamoDB table is created for storing form submissions.

Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

License
MIT License © Charles Maponya
