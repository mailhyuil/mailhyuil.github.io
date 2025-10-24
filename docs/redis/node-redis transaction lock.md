# node-redis transaction lock

> 실제로는 redlock을 사용해야한다.

## withLock

```ts
import { randomBytes } from "crypto";

export const withLock = async (key: string, cb: () => any) => {
  // Initialize a few variables to control retry behavior
  const retryDelay = 100; // 100ms
  let retries = 20;

  // Generate a random value to store at the lock key
  const token = randomBytes(6).toString("hex");
  // Create the lock key
  const lockKey = `lock:${key}`;
  // Set up a while loop to implement the retry behavior
  while (retries >= 0) {
    retries--;
    // Try to do a SET NX operation
    const acquired = await client.set(lockKey, token, {
      NX: true,
      PX: 2000, // lock 내에서 발생하는 crash로 서버 전체가 멈출 수 있다. 항상 timeout을 설정해서 lock을 해제할 수 있도록 한다.
    });
    // IF brief pause (retryDelay) and then retry
    if (!acquired) {
      await pause(retryDelay);
      continue;
    }
    try {
      // ELSE the set is successful, run the callback
      const result = await cb();
      // and return the result
      return result;
    } finally {
      // and Unset the locked set
      await client.del(lockKey);
    }
  }
};

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
```

## usage

```ts
withLock("key", async () => {
  return Promise.all([
    client.rPush("color", "red"),
    client.hSet("key", {
      field: "value",
    }),
  ]);
});
```
