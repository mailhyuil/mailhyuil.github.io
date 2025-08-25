# nest microservice MessagePattern vs EventPattern

## @EventPattern

> 이벤트 방식
>
> > 요청을 받아도 응답을 반환하지 않아도 됨
> >
> > > 비동기 처리에 사용
> > >
> > > > client.emit()와 사용

```ts
import { Controller, Get, OnModuleInit } from "@nestjs/common";
import { Client, ClientKafka, EventPattern, Payload } from "@nestjs/microservices";
import { kafkaConfig } from "./kafka.config";

@Controller()
export class AppController {
  @Client(kafkaConfig) client: ClientKafka;

  @Get()
  emitData(): string {
    this.client.emit<string>("event", { data: "Hello!" });
  }

  @EventPattern("event")
  getData(@Payload("data") payload: any) {
    console.log(payload); // Hello!
  }
}
```

## @MessagePattern

> Request-Reply 패턴 사용 시
>
> > 프로듀서가 요청을 보낸 후 reply 토픽을 구독하고 있으면 컨슈머가 topic을 처리후 비동기 적으로 reply 토픽에 응답을 반환
> >
> > > client.send()와 사용
> > >
> > > > client.subscribeToResponseOf()을 통해 reply topic을 구독해야함

```ts
import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class MathController implements OnModuleInit {
  @Client(config) client: ClientProxy;

  onModuleInit() {
    const requestPatterns = ["message"];
    requestPatterns.forEach(pattern => {
      // reply topic을 구독
      // 구독 하지 않을 시 The client consumer did not subscribe to the corresponding reply topic 에러 발생
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get()
  sendMessage(): number {
    this.client.send("message", { data: "Hello!" }).subscribe(reply => {
      console.log(reply); // Nice to meet you!
    });
  }

  @MessagePattern("message")
  getMessageAndReply(@Payload("data") payload: any): string {
    console.log(payload); // Hello!
    return "Nice to meet you!";
  }
}
```
