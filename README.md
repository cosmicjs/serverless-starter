# Serverless Starter
Serverless Node.js starter app powered by [Cosmic JS](https://cosmicjs.com) 🚀

## Installation
Install via the [Cosmic CLI](https://github.com/cosmicjs/cosmic-cli).
```bash
npm i -g cosmic-cli

# Login to your Cosmic JS account
cosmic login

# Installs example content to a new or existing Bucket and downloads the app locally
cosmic init serverless-starter
cd serverless-starter
```
## Install Serverless
Install [Serverless](https://serverless.com) and login.
```
npm i -g serverless
serverless login
```
## Run locally
Start with serverless offline command.
```bash
COSMIC_BUCKET=your-bucket-slug STAGE=local sls offline start
```
## Configure AWS credentials
Add your AWS keys.  Follow the [guide on the Serverless website](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for more instructions.
```
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
## Deploy
```
COSMIC_BUCKET=your-bucket-slug sls deploy
```