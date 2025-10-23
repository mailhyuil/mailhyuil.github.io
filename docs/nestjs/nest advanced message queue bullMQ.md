# nest advanced message queue

> bullmq는 새로운 프로세스를 생성해주지 않는다. (메인 프로세스와 분리되지 않는다.)
>
> 따라서 독립된 앱으로 실행시켜야 한다.
>
> > redis 기반의 가벼운 메세지 큐
> >
> > > 요청은 처리될 때까지 큐에서 대기하기 때문에 서버가 다운되어도 메세지가 유실되지 않는다.
> > >
> > > > 서버 부하가 많은 작업의 경우 MQ에 저장해두고 한번에 처리할 수 있는 양만큼만 가져와서 처리한다.
> > > >
> > > > > @Processor()로 Consumer(process)를 생성하여 그 프로세스에서 작업을 처리한다. (메인 프로세스와 분리)
> > > > >
> > > > > @Process()안에서 concurrency를 설정할 수 있다. (동시에 처리할 수 있는 job의 개수)

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

> registerQueue가 된 모듈에서만 @InjectQueue를 사용할 수 있다.

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

> @Process에 반드시 name을 지정해도 되고 안하면 그냥 add
>
> > concurrency: 동시에 처리할 수 있는 job의 개수
> >
> > concurrency가 1이면 transcode job은 한번에 하나만 처리한다.

```ts
import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor("audio")
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process({
    name: "transcode",
    concurrency: 5,
  })
  transcode(job: Job) {
    this.logger.debug("Start transcoding...");
    this.logger.debug(job.data);
    this.logger.debug("Transcoding completed");
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug("onCompleted");
    this.logger.debug(result);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug("onActive");
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    this.logger.debug("onFailed");
    this.logger.debug(err);
  }
}
```

## audio.controller.ts

> > multi worker로 빠르게 처리하고 싶다면 data를 나눠서 여러개의 add를 사용 process의 concurrency도 높여야 한다.

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
      },
    );
  }
}
```
