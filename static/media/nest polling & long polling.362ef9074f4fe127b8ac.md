# nest polling & long polling

## functions

```ts
const jobs = new Map<string, number>();

function generateJobId() {
  const jobId = `jobs:${Math.random().toString(36).substring(7)}`;
  return jobId;
}

function doJob(jobId: string) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    jobs.set(jobId, progress);
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 1000);
}

async function checkIfJobIsDone(jobId: string) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const progress = jobs.get(jobId);
      if (!progress) {
        clearInterval(interval);
        reject(new NotFoundException("Job not found"));
      }
      if (progress >= 100) {
        clearInterval(interval);
        resolve(true);
      }
    }, 1000);
  });
}
```

## controller

```ts
import { Controller, Get, NotFoundException, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";

@ApiTags("Test")
@Controller({ path: "tests", version: "1" })
export class TestController {
  @Get("polling")
  async polling(@Query("jobId") jobId: string) {
    const progress = jobs.get(jobId);
    if (!progress) {
      throw new NotFoundException("Job not found");
    }
    return { progress };
  }

  @Get("long-polling")
  async longPolling(@Query("jobId") jobId: string, @Res() res: Response) {
    await checkIfJobIsDone(jobId);
    const progress = jobs.get(jobId);
    res.end(JSON.stringify({ progress }));
  }

  @Post()
  async submit() {
    const jobId = generateJobId();
    doJob(jobId);
    return { jobId };
  }
}
```
