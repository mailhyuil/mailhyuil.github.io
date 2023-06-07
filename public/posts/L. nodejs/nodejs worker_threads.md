# node worker_threads

## import

```ts
const { Worker } = require("worker_threads");

const { isMainThread, parentPort, MessageChannel, workerData } = require("worker_threads");
```

## 사용

```ts
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 메인 스레드
  const worker = new Worker(__filename);

  worker.on("message", (value) => {
    console.log("워커로부터", value);
  });

  worker.on("exit", (value) => {
    // parentPort.close()가 일어나면 이벤트 발생
    console.log("워커 끝~");
  });

  worker.postMessage("ping"); // 워커스레드에게 메세지를 보낸다.
} else {
  // 워커스레드

  parentPort.on("message", (value) => {
    console.log("부모로부터", value);
    parentPort.postMessage("pong");
    parentPort.close(); // 워커스레드 종료라고 메인스레드에 알려줘야 exit이벤트 발생
  });
}
```
