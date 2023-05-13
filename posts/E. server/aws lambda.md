# aws lambda

> you must also use S3 to host the files and API Gateway to expose the API over HTTP.

## 준비

1. db 서버(postgres) 및 psql
2. aws 계정 및 access key
3. serverless framework cli
4. nodejs

## function

```ts
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.handler = async (event, context, callback) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    };
  }
};
```

## serverless framwork cli command

```
npx serverless config credentials --provider aws --key AWS_ACCESS_KEY_ID  --secret AWS_SECRET_ACCESS_KEY

npx serverless deploy
```

## result

```
Service Information
service: prisma-aws-lambda-example
stage: dev
region: us-east-1
stack: prisma-aws-lambda-example-dev
resources: 39
api keys:
  None
endpoints:
  GET - https://UNIQUE_IDENTIFIER.execute-api.us-east-1.amazonaws.com/dev/
  GET - https://UNIQUE_IDENTIFIER.execute-api.us-east-1.amazonaws.com/dev/seed
  GET - https://UNIQUE_IDENTIFIER.execute-api.us-east-1.amazonaws.com/dev/users
  POST - https://UNIQUE_IDENTIFIER.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://UNIQUE_IDENTIFIER.execute-api.us-east-1.amazonaws.com/dev/posts
functions:
  status: prisma-aws-lambda-example-dev-status
  seed: prisma-aws-lambda-example-dev-seed
  getUsers: prisma-aws-lambda-example-dev-getUsers
  createUser: prisma-aws-lambda-example-dev-createUser
  getPosts: prisma-aws-lambda-example-dev-getPosts
layers:
  None
```
