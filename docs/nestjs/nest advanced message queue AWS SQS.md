# nest advanced message queue AWS SQS

> aws의 메세지 브로커 서비스

## install

```sh
npm i @ssut/nestjs-sqs
npm i @aws-sdk/client-sqs
```

## module

```ts
@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: "batch",
          queueUrl: `http://localhost:9324/queue/${queueName}`,
        },
      ],
      producers: [
        {
          name: "batch",
          queueUrl: `http://localhost:9324/queue/${queueName}`,
        },
      ],
    }),
  ],
})
class AppModule {}
```

## producer

> sqsService 주입 후 send 메서드로 메시지 전송

```ts
export class AppService {
  public constructor(
    private readonly sqsService: SqsService,
  ) { }

  public async dispatchSomething() {
    await this.sqsService.send(/** name: */ 'queueName', {
      id: 'id',
      body: { ... },
      groupId: 'groupId',
      deduplicationId: 'deduplicationId',
      messageAttributes: { ... },
      delaySeconds: 0,
    });
  }
}
```

## consumer

> @SqsMessageHandler 데코레이터로 메시지 핸들러 등록

```ts
import { Message } from "@aws-sdk/client-sqs";

@Injectable()
export class AppMessageHandler {
  @SqsMessageHandler(/** name: */ "queueName", /** batch: */ false)
  public async handleMessage(message: Message) {}

  @SqsConsumerEventHandler(/** name: */ "queueName", /** eventName: */ "processing_error")
  public onProcessingError(error: Error, message: Message) {
    // report errors here
  }
}
```
