# nest advanced microservice kafka

> 이벤트 브로커는 메시지 브로커 역할도 수행하지만 consumer가 특정 시점부터 이벤트를 다시 읽어갈 수 있다. (이벤트 소싱)

## install

```sh
npm i @nestjs/microservices
npm i kafkajs
```

## kafka.config.ts

```ts
import { KafkaOptions, Transport } from "@nestjs/microservices";

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ["127.0.0.1:9092"],
    },
    consumer: {
      groupId: "myapp-consumer",
    },
  },
};
```

## main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { kafkaConfig } from "./kafka.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(kafkaConfig);
  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
```

## controller

```ts
import { Controller, Get } from "@nestjs/common";
import { Client, ClientKafka, Ctx, EventPattern, KafkaContext, MessagePattern, Payload } from "@nestjs/microservices";
import { kafkaConfig } from "./kafka.config";

@Controller()
export class AppController {
  @Client(kafkaConfig)
  client: ClientKafka;

  onModuleInit() {
    const requestPatterns = ["message"];
    requestPatterns.forEach(pattern => {
      // reply 토픽 구독
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get("event")
  emitData() {
    this.client.emit<string>("event", { data: "hello world" }).subscribe(reply => {
      console.log("reply", reply);
    });
  }

  @EventPattern("event")
  getEvent(@Payload("data") payload: any, @Ctx() context: KafkaContext) {
    console.log(payload);
  }

  @EventPattern("postgres_server.public.users")
  databaseChange(@Payload() payload: any, @Ctx() context: KafkaContext) {
    console.log(payload);
  }

  @Get("message")
  sendData() {
    this.client.send<string>("message", { data: "hello world" }).subscribe(reply => {
      console.log("reply", reply);
    });
  }

  @MessagePattern("message")
  getData(@Payload("data") payload: any, @Ctx() context: KafkaContext) {
    console.log(payload);
    return { data: "nice to meet you" };
  }
}
```
