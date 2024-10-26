# aws-sdk

## install

```sh
# v2
npm install aws-sdk

# v3
npm i @aws-sdk/client-*
# npm i @aws-sdk/client-s3
# npm i @aws-sdk/client-dynamodb
# npm i @aws-sdk/client-sqs
# npm i @aws-sdk/client-cloudfront

# 그 외
npm i s3-streamlogger
...
```

## usage

```ts
// v2
import S3 from "aws-sdk/clients/s3";

// v3
import { S3Client } from "@aws-sdk/client-s3";
```
