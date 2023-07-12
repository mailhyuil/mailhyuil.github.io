# aws-sdk

> software development kit

## install

```sh
npm install aws-sdk
```

## 사용

```ts
// import entire SDK
import AWS from "aws-sdk";
// import AWS object without services
import AWS from "aws-sdk/global";
// import individual service
import S3 from "aws-sdk/clients/s3";
```

## Endpoint

```
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
```
