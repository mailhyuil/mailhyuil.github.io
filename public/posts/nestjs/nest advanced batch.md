# nest advanced batch

> 너무 많은 데이터를 가져오면 메모리 부족이 발생할 수 있다.
>
> > pg-query-stream, JSONStream을 사용하여 데이터를 스트림으로 가져와 메모리 부족을 방지한다.
> >
> > > cpu bound 작업일 경우 bull 같은 큐를 사용하여 처리할 수도 있다.
> > >
> > > > 배치작업의 원자성이 중요하다면 하나의 트랜잭션으로 처리하지만 "일반적으로 여러개의 트랜잭션으로 처리한다."

## install

```sh
# 스케쥴링
npm i @nestjs/schedule

# cpu-bound (멀티쓰레딩), 에러 핸들링
docker run --name redis -d -p 6379:6379 redis:latest
npm i @nestjs/bull
npm i bull

# 데이터 스트림
npm i pg
npm i pg-query-stream
npm i JSONStream
```

## app.module.ts

```ts
import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BatchModule } from "./batch/batch.module";

@Module({
  imports: [
    BatchModule,
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## batch.module.ts

```ts
import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { BatchProcessor } from "./batch.prcessor";
import { TaskController } from "./task.controller";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "batch",
    }),
  ],
  controllers: [TaskController],
  providers: [BatchProcessor],
})
export class BatchModule {}
```

## batch.processor.ts

> concurrency를 높이면 job을 동시에 처리할 수 있다.
>
> 처리할 데이터를 나눠서 concurrency만큼 job add하면 된다.

```ts
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from "@nestjs/bull";
import { Logger, OnModuleDestroy } from "@nestjs/common";
import { Job } from "bull";
import JSONStream from "JSONStream";
import { Pool } from "pg";
import QueryStream from "pg-query-stream";

@Processor("batch")
export class BatchProcessor implements OnModuleDestroy {
  private readonly logger = new Logger(BatchProcessor.name);
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: "localhost",
      user: "postgres",
      password: "1234",
      database: "mydb",
      port: 5432,
    });
  }

  onModuleDestroy() {
    this.pool.end();
  }

  @Process({
    concurrency: 5,
  })
  handleCron(job: Job) {
    return new Promise<void>((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          reject(err);
          return;
        }

        const query = new QueryStream("SELECT id, point FROM users");

        if (client) {
          const stream = client.query(query);
          //release the client when the stream is finished
          stream.on("end", () => {
            done();
            resolve();
          });
          stream.on("error", err => {
            done();
            reject(err);
          });
          stream.pipe(JSONStream.stringify()).on("data", data => {
            const query = "UPDATE users SET point = $1 WHERE id = $2";
            for (let user of data) {
              // logic to process data
              const bonusPoint = data.point + job.data.point;
              client.query(query, [user.name, user.id]);
            }
          });
        }
      });
    });
  }

  startTime?: any;
  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug("onActive");
    this.startTime = new Date();
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug("onCompleted");
    this.logger.debug(`Time elapsed: ${new Date().getTime() - this.startTime.getTime()}ms`);
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    this.logger.debug("onFailed");
    this.logger.error(err);
  }
}
```

## task.controller.ts

```ts
import { InjectQueue } from "@nestjs/bull";
import { Controller } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { Queue } from "bull";

@Controller()
export class TaskController {
  constructor(@InjectQueue("batch") private readonly batchQueue: Queue) {}

  @Cron("*/5 * * * * *")
  async handleTask() {
    this.batchQueue.add("batch", { point: 100 });
  }
}
```
