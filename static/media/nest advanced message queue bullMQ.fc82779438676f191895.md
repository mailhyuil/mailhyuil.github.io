# nest advanced message queue

> redis 기반의 가벼운 메세지 큐
>
> > 요청은 처리될 때까지 큐에서 대기하기 때문에 서버가 다운되어도 메세지가 유실되지 않는다.
> >
> > > 서버 부하가 많은 작업의 경우 MQ에 저장해두고 한번에 처리할 수 있는 양만큼만 가져와서 처리한다.
> > >
> > > > @Process는 별도의 worker로 실행된다.

## install

```sh
npm i bull
npm i @nestjs/bull

# redis 설치
docker run --name redis -d -p 6379:6379 redis:latest

# redis-cli
npm i -g redis-cli
rdcli -h localhost -p 6379
```

## app.module.ts

```ts
import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
  ],
})
export class AppModule {}
```

## audio.module.ts

```ts
import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { AudioController } from "./audio.controller";
import { AudioProcessor } from "./audio.processor";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "audio",
    }),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule {}
```

## audio.processor.ts

```ts
import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor("audio")
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process("transcode")
  transcode(job: Job) {
    this.logger.debug("Start transcoding...");
    this.logger.debug(job.data);
    this.logger.debug("Transcoding completed");
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug("onCompleted");
    this.logger.debug(job.data);
    this.logger.debug(result);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug("onActive");
    this.logger.debug(job.data);
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    this.logger.debug("onFailed");
    this.logger.debug(job.data);
    this.logger.debug(err);
  }
}
```

## audio.controller.ts

```ts
import { InjectQueue } from "@nestjs/bull";
import { Controller, Post } from "@nestjs/common";
import { Queue } from "bull";

@Controller("audio")
export class AudioController {
  constructor(@InjectQueue("audio") private readonly audioQueue: Queue) {}

  @Post("transcode")
  async transcode() {
    await this.audioQueue.add(
      "transcode",
      {
        file: "audio.mp3",
      },
      {
        attempts: 3,
        backoff: 60000,
        delay: 1000,
        priority: 1,
      }
    );
  }
}
```
