# aws message queue SQS ElasticMQ

> AWS SQS와 호환되는 오픈 소스 메시지 큐 서버
>
> > SQS를 위한 테스트/개발 전용

## docker-compose.yaml

```yaml
version: "3.8"
services:
  elasticmq:
    image: softwaremill/elasticmq-native
    ports:
      - "9324:9324"
      - "9325:9325"
    volumes:
      - "./elasticmq.conf:/opt/elasticmq.conf"
```

## queue 생성

```sh
curl -X POST "http://localhost:9324/?Action=CreateQueue&QueueName=my-queue"
```

## elasticmq.conf

```hocon
include classpath("application.conf")

node-address {
  protocol = http
  host = "*"
  port = 9324
}

rest-sqs {
  enabled = true
  bind-port = 9324
  bind-hostname = "0.0.0.0"
  sqs-limits = strict
}

queues {
  my-queue {
    defaultVisibilityTimeout = 10 seconds
    delay = 5 seconds
    receiveMessageWait = 0 seconds
  }
}
```

## server

```ts
// app.module.ts
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}

// queue.service.ts
import { Injectable } from "@nestjs/common";
import { SQSClient, SendMessageCommand, ReceiveMessageCommand } from "@aws-sdk/client-sqs";

@Injectable()
export class QueueService {
  private sqsClient: SQSClient;
  private queueUrl: string;

  constructor() {
    this.sqsClient = new SQSClient({
      region: process.env.AWS_REGION || "us-east-1",
      endpoint: process.env.SQS_ENDPOINT || "http://localhost:4566",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "test",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "test",
      },
    });
    this.queueUrl = process.env.QUEUE_URL || "http://localhost:4566/000000000000/my-queue";
  }

  async sendMessage(message: any) {
    const command = new SendMessageCommand({
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify(message),
    });
    return await this.sqsClient.send(command);
  }

  async receiveMessages() {
    const command = new ReceiveMessageCommand({
      QueueUrl: this.queueUrl,
      MaxNumberOfMessages: 10,
      WaitTimeSeconds: 5,
    });
    return await this.sqsClient.send(command);
  }
}
```
