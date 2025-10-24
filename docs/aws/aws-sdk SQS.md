# aws-sdk SQS

## install

```sh
npm i @aws-sdk/client-sqs
```

## usage

```ts
import { SQSClient, ListQueuesCommand } from "@aws-sdk/client-sqs";

const client = new SQSClient({ region: "REGION" });

const params = {
  /** input parameters */
};

try {
  const data = await client.send(command);
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```
