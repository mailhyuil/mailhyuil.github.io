# nest eventEmitter

## install

```sh
npm i --save @nestjs/event-emitter
```

## app module

```ts
import { Module } from "@nestjs/common";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [EventEmitterModule.forRoot(), EventModule],
})
export class AppModule {}
```

## eventType

```ts
export const Events = {
  AUTH_LOG: "AUTH LOG",
  SOME_LOG: "SOME LOG",
};
```

## event-listener.service.ts

```ts
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EventListenerService {
  private logger = new Logger(EventListenerService.name);
  constructor(private readonly prismaService: PrismaService) {}

  async createLog(eventType: string, content: string, entityId: string, authId?: string) {
    switch (eventType) {
      case "some": {
        await this.prismaService.someLog.create({
          data: {
            content,
            some: {
              connect: { id: entityId },
            },
          },
        });
        break;
      }
      case "auth": {
        await this.prismaService.authLog.create({
          data: {
            content,
            auth: {
              connect: { id: entityId },
            },
          },
        });
        break;
      }
    }
  }
}
```

## event-listener/some-log/some-log.listener.ts

```ts
@Injectable()
export class LogService {
  constructor(private readonly eventListenerService: EventListenerService) {}

  @OnEvent(Events.SOME_LOG)
  async handleCreateLog(content: string, entityId: string, authId: string) {
    await this.eventListenerService.createLog("some", content, entityId, authId);
  }
}
```

## controller or service

```ts
constructor(private readonly eventEmitter: EventEmitter2) {}

this.eventEmitter.emit(Events.SOME_LOG, '로그를 남깁니다.', createdId, authId);
```
