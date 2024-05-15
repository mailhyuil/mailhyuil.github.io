# nest schedule

## install

```sh
npm i @nestjs/schedule
```

## module

```ts
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot(), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Static task.service.ts

```ts
import { Injectable, Logger } from "@nestjs/common";
import { Cron, Interval, Timeout } from "@nestjs/schedule";

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // @Cron("45 * * * * *")
  @Cron(CronExpression.EVERY_45_SECONDS)
  handleCron() {
    this.logger.debug("Called when the second is 45");
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug("Called every 10 seconds");
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug("Called once after 5 seconds");
  }
}
```

## Dynamic task.service.ts

```ts
import { Injectable, Logger } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";
@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  getCronJob(jobName: string) {
    try {
      return this.schedulerRegistry.getCronJob(jobName);
    } catch (error) {
      return null;
    }
  }

  addCronJob({ jobName, date, callback }: { jobName: string; date: Date; callback: () => void }) {
    const job = new CronJob(date, callback);
    this.schedulerRegistry.addCronJob(jobName, job);
    job.runOnce = true;
    job.start();
  }

  deleteCron(jobName: string) {
    this.schedulerRegistry.deleteCronJob(jobName);
  }
}
```
