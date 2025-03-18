# nest advanced batch

> 너무 많은 데이터를 가져오면 메모리 부족이 발생할 수 있다.
>
> > pg-query-stream, JSONStream을 사용하여 데이터를 스트림으로 가져와 메모리 부족을 방지한다.
> >
> > > cpu bound 작업일 경우 bull 같은 큐를 사용하여 처리할 수도 있다.
> > >
> > > > 배치작업의 원자성이 중요하다면 하나의 트랜잭션으로 처리하지만 "일반적으로 여러개의 트랜잭션으로 처리한다."
> > > >
> > > > > bullmq는 메인 프로세스와 분리시키지 않는다 따라서 새로운 앱으로 띄워야 한다.

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
```

## main.ts

> standalone

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
}
bootstrap();
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

## batch.processor.ts (postgres 데이터를 stream으로 읽어서 처리하기) (io-bound)

> concurrency를 높이면 job을 동시처리할 수 있다. (병렬처리가 아님)

```ts
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from "@nestjs/bull";
import { Logger, OnModuleDestroy } from "@nestjs/common";
import { Job } from "bull";
import { Pool } from "pg";
import QueryStream from "pg-query-stream";
@Processor("batch")
export class BatchProcessor implements OnModuleDestroy {
  private readonly logger = new Logger(BatchProcessor.name);
  private pgPool: Pool;

  constructor() {
    this.pgPool = new Pool({
      host: "localhost",
      user: "postgres",
      password: "1234",
      database: "mydb",
      port: 5432,
    });
  }

  onModuleDestroy() {
    this.logger.log("Closing PostgreSQL pool...");
    this.pgPool.end();
  }

  async queryAsStream(
    query: QueryStream,
    callback: (...args: any[]) => void,
    error: (err: Error) => void,
    complete: () => void,
  ) {
    this.pgPool.connect((err, client, done) => {
      if (!client) {
        throw new Error("DB Connection Error");
      }

      if (err) {
        throw err;
      }

      const stream = client.query(query);

      stream.once("error", err => {
        done(); // ✅ DB 연결 반환
        error(err);
        stream.removeAllListeners(); // ✅ 스트림 리스너 제거
      });

      stream.on("data", callback);

      stream.once("end", () => {
        done(); // ✅ DB 연결 반환
        complete();
        stream.removeAllListeners(); // ✅ 스트림 리스너 제거
      });
    });
  }

  @Process({ concurrency: 1 })
  async handleCron(job: Job) {
    return new Promise<number>((resolve, reject) => {
      const query = new QueryStream("SELECT * FROM generate_series(0, $1) num", [job.data.count]);
      let sum = 0;
      this.queryAsStream(
        query,
        ({ num }) => {
          try {
            sum += num;
          } catch (error) {
            this.logger.error(`Worker failed: ${error}`);
            reject(error);
          }
        },
        err => reject(err),
        () => {
          this.logger.debug("Stream completed");
          resolve(sum);
        },
      );
    });
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`🔵 Job Started: ${job.id}`);
    if (job.id) console.time(`Job ${job.id}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug(`✅ Job Completed: ${job.id}, Result: ${result}`);
    if (job.id) console.timeEnd(`Job ${job.id}`);
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    this.logger.error(`❌ Job Failed: ${job.id} - ${err.message}`);
  }
}
```

## batch.processor.ts (worker_threads로 병렬처리하기) (cpu-bound)

```ts
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from "@nestjs/bull";
import { Logger, OnModuleDestroy } from "@nestjs/common";
import { Job } from "bull";
import { pool, Pool, Promise } from "workerpool";

@Processor("batch")
export class BatchProcessor implements OnModuleDestroy {
  private readonly logger = new Logger(BatchProcessor.name);
  private workerPool: Pool;

  constructor() {
    this.workerPool = pool();
  }

  onModuleDestroy() {
    this.logger.log("Closing PostgreSQL pool...");
    this.workerPool.terminate();
  }

  @Process({ concurrency: 1 })
  async handleCron(job: Job) {
    const count = job.data.count;
    /// 값을 나눠서 더하기
    const chunkSize = 100;
    let sum = 0;
    const promises: Promise<number, Error>[] = [];
    for (let start = 0; start < count; start += chunkSize) {
      const end = Math.min(i + chunkSize, count);
      const promise = this.workerPool
        .exec(
          (start, end) => {
            let sum = 0;
            for (let i = start; i < end; i++) {
              sum += i;
            }
            return sum;
          },
          [start, end],
        )
        .catch(err => {
          this.logger.error(err);
          throw err;
        });
      promises.push(promise);
    }
    const results = await Promise.all(promises);
    for (const result of results) {
      sum += result;
    }
    return sum;
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`🔵 Job Started: ${job.id}`);
    if (job.id) console.time(`Job ${job.id}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug(`✅ Job Completed: ${job.id}, Result: ${result}`);
    if (job.id) console.timeEnd(`Job ${job.id}`);
  }

  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    this.logger.error(`❌ Job Failed: ${job.id} - ${err.message}`);
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
    this.batchQueue.add({ count: 10000 });
  }
}
```
