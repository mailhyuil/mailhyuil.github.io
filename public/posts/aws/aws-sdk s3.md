# aws-sdk s3

## install

```sh
npm i @aws-sdk/client-s3
```

## usage

```ts
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "REGION" });

const params = {
  /** input parameters */
};

const command = new ListBucketsCommand(params);

try {
  const data = await client.send(command);
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
}
```
