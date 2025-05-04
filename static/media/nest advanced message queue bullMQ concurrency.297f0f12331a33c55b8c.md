# nest advanced message queue

> concurrency: 동시에 처리할 수 있는 job의 개수 (동시처리)
>
> > concurrency가 1이면 transcode job은 한번에 하나만 처리한다.
> >
> > concurrency가 n개일 경우 n개의 job을 동시에 처리한다. (io bound 작업에서 유용)
> >
> > > 병렬처리를 하기 위해서는 worker_threads를 사용하거나 cluster를 통해서 앱을 여러개 띄워야 한다.

## batch.controller.ts

> multi worker로 빠르게 처리하고 싶다면 data를 나눠서 여러개의 add를 사용 process의 concurrency도 높여야 한다.

```ts
import { InjectQueue } from "@nestjs/bull";
import { Controller, Post } from "@nestjs/common";
import { Queue } from "bull";

@Controller("batch")
export class BatchController {
  constructor(@InjectQueue("batch") private readonly batchQueue: Queue) {}

  @Post("process")
  async process() {
    await this.batchQueue.add({ data: 1000 });
    await this.batchQueue.add({ data: 1000 });
    await this.batchQueue.add({ data: 1000 });
    /// 3개의 job을 큐에 추가
  }
}
```

## batch.processor.ts

```ts
import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import CPU_CORES from "CPU_CORES";

@Processor("batch")
export class BatchProcessor {
  private readonly logger = new Logger(BatchProcessor.name);
  @Process({
    concurrency: 2, // 동시에 2개의 job을 큐에서 가져와서 처리할 수 있다. (병렬처리가 아니다!)
  })
  process(job: Job) {
    const data = job.data;
    this.logger.debug("start processing...");
    this.logger.debug(data);
    this.logger.debug("processing completed");
  }
}
```
