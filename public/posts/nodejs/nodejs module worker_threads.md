# node worker_threads

> 워커 스레드의 가장 중요한 목표는 I/O 작업이 아닌 CPU 집약적인 작업의 퍼포먼스를 향상시키는 겁니다.
>
> > 멀티코어에서 사용하면 실제로 병렬로 수행

## import

```ts
const { Worker } = require("worker_threads");

const { isMainThread, workerPort, parentPort, MessageChannel, workerData } = require("worker_threads");

const worker = new Worker("./job.js", {
  workerData: { data: "hi" }, // worker에게 전달할 데이터
}); // worker 생성

parentPort.postMessage("message"); // worker에게 메시지 전달
workerPort.postMessage("message"); // main에게 메시지 전달
```

## usage

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

## sample

```ts
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  console.time("start");
  const worker = new Worker(__filename); // worker 생성

  worker.on("message", (message) => {
    console.log("from worker", message);
    console.timeEnd("start");
  });
  worker.on("error", (message) => console.error(message));
  worker.on("exit", (message) => console.log("worker exit", message));

  console.log("i'm main");
  let count = 0;
  console.time("hi");
  for (let i = 0; i < 10000000000; i++) {
    count++;
  }
  console.timeEnd("hi");
} else {
  console.log("i'm worker");
  let count = 0;
  console.time("hi");
  for (let i = 0; i < 10000000000; i++) {
    count++;
  }
  console.timeEnd("hi");

  parentPort.postMessage(count);
}
```

## shared memory

```ts

```
