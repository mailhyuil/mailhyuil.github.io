# node worker_threads

> 워커의 가장 중요한 목표는 I/O 작업이 아닌 CPU 집약적인 작업의 퍼포먼스를 향상시키는 겁니다.

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

## shared memory

```ts
const { Worker } = require("worker_threads");

// 공유 배열을 생성합니다.
const sharedArray = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
const arr = new Int32Array(sharedArray);

// Worker 스레드를 생성하고 공유 배열을 전달합니다.
const worker = new Worker("./worker.js", { workerData: sharedArray });

// Worker 스레드로부터 메시지를 수신합니다.
worker.on("message", (message) => {
  console.log("메시지 수신:", message);
});

// 공유 배열에 값을 설정하는 함수
function setSharedValue(index, value) {
  Atomics.store(arr, index, value);
}

// 공유 배열의 값을 가져오는 함수
function getSharedValue(index) {
  return Atomics.load(arr, index);
}

// 공유 배열에 값을 설정하고 Worker 스레드에 메시지를 보냅니다.
setSharedValue(0, 42);
worker.postMessage({ value: getSharedValue(0) });
```
