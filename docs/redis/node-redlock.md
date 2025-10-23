# node-redlock

> 분산 시스템에서 여러개의 쓰기 db를 사용 시에는 동시성 충돌을 방지하기 위해서 분산락을 사용
>
> > 이때 redis를 사용하여 application level에서 구현할 수 있다.

## install

```sh
npm i redlock
```

## usage

```js
import Client from "ioredis";
import Redlock from "redlock";

const clientA = new Client({ host: "a.redis.example.com" });
const clientB = new Client({ host: "b.redis.example.com" });
const clientC = new Client({ host: "c.redis.example.com" });

const redlock = new Redlock([clientA, clientB, clientC], {
  // The expected clock drift; for more details see:
  // http://redis.io/topics/distlock
  driftFactor: 0.01, // multiplied by lock ttl to determine drift time
  // The max number of times Redlock will attempt to lock a resource
  // before erroring.
  retryCount: 10,
  // the time in ms between attempts
  retryDelay: 200, // time in ms
  // the max time in ms randomly added to retries
  // to improve performance under high contention
  // see https://www.awsarchitectureblog.com/2015/03/backoff.html
  retryJitter: 200, // time in ms
  // The minimum remaining time on a lock before an extension is automatically
  // attempted with the `using` API.
  automaticExtensionThreshold: 500, // time in ms
});

/* usage 1 */
await redlock.using([senderId, recipientId], 5000, async signal => {
  // Do something...
  await something();

  // Make sure any attempted lock extension has not failed.
  if (signal.aborted) {
    throw signal.error;
  }

  // Do something else...
  await somethingElse();
});

/* usage 2 */
// Acquire a lock.
let lock = await redlock.acquire(["a"], 5000);
try {
  // Do something...
  await something();

  // Extend the lock.
  lock = await lock.extend(5000);

  // Do something else...
  await somethingElse();
} finally {
  // Release the lock.
  await lock.release();
}
```
