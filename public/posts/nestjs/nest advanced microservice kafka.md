# nest kafka

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
import { Controller, Get, OnModuleInit } from "@nestjs/common";
import { Client, ClientKafka, EventPattern } from "@nestjs/microservices";
import { AppService } from "./app.service";
import { kafkaConfig } from "./kafka.config";

@Controller()
export class AppController implements OnModuleInit {
  @Client(kafkaConfig)
  client: ClientKafka;
  constructor(private readonly appService: AppService) {}

  onModuleInit() {
    const requestPatterns = ["entity-created"];
    requestPatterns.forEach(pattern => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get()
  getHello(): string {
    // fire event to kafka
    // this.client.emit<string>('entity-created', 'some entity ' + new Date());
    return this.appService.getHello();
  }

  @EventPattern("entity-created")
  async handleEntityCreated(payload: any) {
    console.log(JSON.stringify(payload) + " created");
    //console.log(payload.value + ' created');
  }
}
```
