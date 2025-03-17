# nest microservice MessagePattern vs EventPattern

## @MessagePattern

> 요청-응답 방식
>
> > 요청을 받으면 응답을 반환해야함
> >
> > > client.send()를 대신 사용해도 된다.

```ts
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MathController {
  @Client(config) client: ClientProxy;

  @MessagePattern({ cmd: "sum" })
  sendSomeMessage(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern('time.us.*')
  getSomeMessage(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log(`Subject: ${context.getSubject()}`); // (e.g. "time.us.east")
    return new Date().toLocaleTimeString(...);
  }

  @Get()
  sendSomeOtherMessage(data: number[]): number {
    this.client.send({ cmd: "sum" }, data).subscribe(result => {
      console.log(result);
    });
  }
}
```

## @EventPattern

> 이벤트 방식
>
> > 요청을 받아도 응답을 반환하지 않아도 됨
> >
> > > 비동기 처리에 사용
> > >
> > > > client.emit()을 대신 사용해도 된다.
> > > >
> > > > > client.subscribeToResponseOf()을 통해 이벤트를 구독해야함

```ts
import { Controller, Get, OnModuleInit } from "@nestjs/common";
import { Client, ClientKafka, EventPattern } from "@nestjs/microservices";
import { kafkaConfig } from "./kafka.config";

@Controller()
export class AppController implements OnModuleInit {
  @Client(kafkaConfig) client: ClientKafka;

  onModuleInit() {
    const requestPatterns = ["entity-created"];
    requestPatterns.forEach(pattern => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get()
  emitSomeEvent(): string {
    // fire event to kafka
    this.client.emit<string>("entity-created", "some entity " + new Date());
  }

  @EventPattern("entity-created")
  async handleEntityCreatedEvent(payload: any) {
    console.log(JSON.stringify(payload) + " created");
  }
}
```
