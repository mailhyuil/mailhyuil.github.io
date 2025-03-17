# nest microservice

> Client: Producer, Consumer 둘 다 될 수 있다.
>
> > main에서 설정하는 방법과 module에서 ClientModule을 사용하는 방법이 있다.
> >
> > > @MessagePattern = client.send() (Message Driven)
> > >
> > > @EventPattern = client.emit() (Event Driven)

## install

```sh
npm i @nestjs/microservices
```

## main config

> Hybrid 방식을 통해 HTTP 서버와 Microservice를 동시에 사용할 수 있다.

```ts
// standalone (http 서버 없이 사용할 수 있음)
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.TCP,
  options: {},
});
await app.listen();

// hybrid (main에서도 http 서버를 사용할 수 있음 / 모듈에 설정하는 것과 같은 효과)
const app = await NestFactory.create(AppModule);

app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.TCP,
  options: {},
});
await app.startAllMicroservices();

await app.listen(3000);
```

### module config

> http 서버와 함께 사용할 수 있음
>
> > main에 hybrid 방식으로 설정하는 것과 같은 효과

```ts
import { Module } from "@nestjs/common";
import { TcpService } from "./tcp.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "TCP_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 3001,
        },
      },
    ]),
  ],
  providers: [TcpService],
  exports: [TcpService],
})
export class TcpModule {
  constructor() {}
}
```

### producer.service.ts

```ts
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
@Injectable()
export class TcpService {
  constructor(@Inject("TCP_SERVICE") private client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  send<T, K>(pattern: any, data: T) {
    return this.client.send<K>(pattern, data);
  }
}
```

### producer.controller.ts

```ts
import { Controller, Get } from "@nestjs/common";
import { TcpService } from "./services/tcp.service";
@Controller()
export class AppController {
  constructor(private readonly tcpService: TcpService) {}
  @Get("order")
  async order() {
    this.tcpService
      .send<string, string>("order", JSON.stringify({ name: "SANGBAEK", order: "Iced Americano" }))
      .subscribe({
        next: result => console.log(result),
        error: error => console.log(error),
        complete: () => console.log("complete"),
      });
  }
}
```

## consumer.controller.ts

```ts
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MathController {
  @MessagePattern({ cmd: "sum" })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern('time.us.*')
  getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log(`Subject: ${context.getSubject()}`); // (e.g. "time.us.east")
    return new Date().toLocaleTimeString(...);
  }

  @EventPattern("order")
  async handleOrder(data: Record<string, unknown>) {
    // business logic
  }
}
```
