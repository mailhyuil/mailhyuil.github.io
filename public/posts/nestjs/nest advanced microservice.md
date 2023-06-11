# nest microservice

## install

```sh
npm i @nestjs/microservices
```

## main.ts

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.TCP,
});
```

## controller

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

# MQTT, NATS, RabbitMQ, Kafka, gRPC

> 메시징을 위한 tech stacks
>
> > 전부 server to server tech stack
> >
> > > gRPC, MQTT는 client to server tech stack이기도 함
