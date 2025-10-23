# aws-sdk EventBridge Scheduler

## install

```sh
npm i @aws-sdk/client-scheduler
```

## usage

```ts
import { SchedulerClient, ListSchedulesCommand } from "@aws-sdk/client-scheduler";

const client = new SchedulerClient({ region: "REGION" });

const params = {
  /** input parameters */
};

try {
  const data = await client.send(command);
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```
