# aws-sdk

## install

```sh
# v2
npm install aws-sdk

# v3
npm i @aws-sdk/client-*
# npm i @aws-sdk/client-s3
# npm i @aws-sdk/client-dynamodb

# 그 외
npm i multer-s3
npm i s3-streamlogger
...
```

## 사용

```ts
// v2
import S3 from "aws-sdk/clients/s3";

// v3
import { S3Client } from "@aws-sdk/client-s3";
```
