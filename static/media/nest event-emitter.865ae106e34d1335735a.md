# nest eventEmitter

> 책임을 분리하기 위해 사용

## install

```sh
npm i @nestjs/event-emitter
```

## app module

```ts
import { Module } from "@nestjs/common";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [EventEmitterModule.forRoot()],
})
export class AppModule {}
```

## service

```ts
import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService, private readonly eventEmitter: EventEmitter2) {}

  async create(data: Prisma.OrderCreateInput) {
    const created = await this.prisma.order.create({
      data: {
        // ...
      },
    });

    // 서비스 간 책임 분리
    this.eventEmitter.emit("order.created", {
      // ...
    });

    return created;
  }
}
```

## event-listener.service.ts

```ts
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EventService {
  constructor(private readonly paymentService: PaymentService) {}
  @OnEvent("order.created", { async: true })
  handleOrderCreatedEvent(payload: OrderCreatedEvent) {
    this.paymentService.create(payload);
  }
}
```
