# nest advanced message queue

> > concurrency: 동시에 처리할 수 있는 job의 개수
> >
> > concurrency가 1이면 transcode job은 한번에 하나만 처리한다.

## batch.controller.ts

> multi worker로 빠르게 처리하고 싶다면 data를 나눠서 여러개의 add를 사용 process의 concurrency도 높여야 한다.

```ts
import { InjectQueue } from "@nestjs/bull";
import { Controller, Post } from "@nestjs/common";
import { Queue } from "bull";
import CPU_CORES from "CPU_CORES";

@Controller("batch")
export class BatchController {
  constructor(@InjectQueue("batch") private readonly batchQueue: Queue) {}

  @Post("process")
  async process() {
    const data = Array.from({ length: 1000 }, (_, i) => i);
    for (let i = 0; i < CPU_CORES; i++) {
      const chunk = data.slice(i * 100, (i + 1) * 100);
      await this.batchQueue.add({
        data: chunk,
      });
    }
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
    concurrency: CPU_CORES,
  })
  process(job: Job) {
    this.logger.debug("start processing...");
    this.logger.debug(job.data);
    this.logger.debug("processing completed");
  }
}
```
