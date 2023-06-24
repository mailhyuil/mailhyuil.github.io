# nest microservice

## install

```sh
npm i @nestjs/microservices
```

## main.ts -> createMicroservice

### options

> 어떤 툴을 사용해서 통신할건지 설정
>
> > 기본 옵션 host, port, retryAttempts, retryDelay
> >
> > > 각 통신 툴마다 나머지 옵션값은 다르다

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.TCP,
});
```

## Server (Controller)

### controller

```ts
import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MathController {
  @MessagePattern({ cmd: "sum" })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: "sum" })
  async accumulate(data: number[]): Promise<number> {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern('time.us.*')
  getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log(`Subject: ${context.getSubject()}`); // e.g. "time.us.east"
    return new Date().toLocaleTimeString(...);
  }

  @EventPattern("user_created")
  async handleUserCreated(data: Record<string, unknown>) {
    // business logic
  }
}
```

## Client (Service)

### tcp.module.ts

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

### tcp.service.ts

```ts
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
@Injectable()
export class TcpService {
  constructor(@Inject("TCP_SERVICE") private client: ClientProxy) {}
  async onApplicationBootstrap() {
    console.log("onApplicationBootstrap");
    await this.client.connect();
  }
  send<T, K>(pattern: any, data: T) {
    return this.client.send<K>(pattern, data);
  }
}
```

### controller

```ts
import { Controller, Get } from "@nestjs/common";
import { TcpService } from "./services/tcp.service";
@Controller()
export class AppController {
  constructor(private readonly tcpService: TcpService) {}
  @Get("order")
  async order() {
    this.tcpService.send<string, string>("order", JSON.stringify({ name: "SANGBAEK", order: "Iced Americano" })).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log("complete"),
    });
  }
}
```
