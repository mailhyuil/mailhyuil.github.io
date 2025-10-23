# localstack

> AWS의 서비스를 로컬에서 흉내내는 도구
>
> > 로컬환경에서 개발 및 테스트를 할 수 있도록 도와줌

## docker-compose.yaml

```sh
version: '3.8'
services:
  localstack:
    image: localstack/localstack
    ports:
      - "4566:4566"
    environment:
      - SERVICES=sqs
      - DEBUG=1
    volumes:
      - "./localstack:/var/lib/localstack"
```

## server

```ts
import { SQSClient } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({
  region: "us-east-1",
  endpoint: "http://localhost:4566", // LocalStack 엔드포인트
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
});
```
