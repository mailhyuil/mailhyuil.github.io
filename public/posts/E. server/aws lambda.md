# aws lambda

> you must also use S3 to host the files and API Gateway to expose the API over HTTP.

## trigger

> lambda function을 실행시키는 트리거가 될 서비스를 정하기

```
s3, dynamoDB, api gateway, sqs ...
```

## cloudwatch

> 람다 함수 실행 로그를 볼 수 있음

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

# zip 파일생성

```
#!/bin/sh

set -eux

rm -rf lambda.zip

zip --symlinks -r lambda.zip index.js prisma/schema.prisma node_modules/@prisma/client node_modules/.pnpm/@prisma+client*

du -b ./lambda.zip
```
