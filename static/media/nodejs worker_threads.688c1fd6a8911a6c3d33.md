# node worker_threads

> 워커의 가장 중요한 목표는 I/O 작업이 아닌 CPU 집약적인 작업의 퍼포먼스를 향상시키는 겁니다.

## import

```ts
const { Worker } = require("worker_threads");

const { isMainThread, parentPort, MessageChannel, workerData } = require("worker_threads");
```

## 사용

### main.js

```ts
const { Worker, isMainThread, parentPort } = require("worker_threads");

const main = async () => {
  try {
    const start = Date.now();
    const values = await Promise.all([work(1), work(2), work(3)]);
    console.log(values);
    console.log(`done! total duration : ${Date.now() - start}ms`);
  } catch (error) {
    console.log(error);
  }
};

const work = async (id) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    // worker 생성
    const worker = new Worker("./job.js", {
      workerData: { id },
    });
    // worker에서 parentPort.postMessage로 보낸 메시지를 받음
    worker.once("message", (message) => {
      console.log(`threadId : [${worker.threadId}] duration : ${Date.now() - start}ms`);
      resolve(message);
    });

    worker.once("error", (error) => {
      reject(error);
    });
  });
};

main();
```

### job.js

```js
const process = require("process");
const { parentPort, workerData } = require("worker_threads");

for (let i = 0; i < 1000000; i++) {
  console.log(`i'm a worker [${workerData.id}] in pid [${process.pid}]!`);
}

parentPort.postMessage(`worker [${workerData.id}] done`);
```

## shared memory

```ts

```
