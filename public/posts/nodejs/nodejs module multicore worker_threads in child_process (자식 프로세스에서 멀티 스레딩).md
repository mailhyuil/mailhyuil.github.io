# node worker_threads in child_process (자식 프로세스에서 멀티 스레딩)

> 자식 프로세스를 생성하고 그 안에서 worker_threads를 사용하여 멀티 스레딩을 구현하는 방법
>
> > main process와 격리시킴과 동시에 cpu-intensive한 작업을 병렬로 처리할 수 있음

## main.js

```js
const { fork } = require("child_process");

// 자식 프로세스 실행
const child = fork("./child.js");

child.on("message", message => {
  console.log("main got message:", message);
});

// 자식 프로세스에 작업 요청
child.send({ num: 100 });
```

## child.js

```js
const { Worker } = require("worker_threads");

// 부모 프로세스로부터 메시지 받기
process.on("message", message => {
  const { num } = message;
  if (num) {
    // 워커 스레드 실행
    const worker = new Worker(`./worker.js`, {
      workerData: {
        num,
      },
    });

    worker.on("message", data => {
      console.log("child got data:", data);
      process.send(data); // 부모 프로세스로 결과 전송
    });
  }
});
```

## worker.js

```js
const { isMainThread, parentPort, workerData } = require("worker_threads");

if (isMainThread) {
  console.log("이 파일은 직접 실행하는 게 아니라 child_process에서 실행해야 함.");
  process.exit(1);
}

const { num } = workerData;
console.log("worker got data:", num);
if (num) {
  console.log("worker start");
  let sum = 0;
  // CPU 집중 연산
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  console.log("worker end");
  parentPort.postMessage({ result: sum });
}
```
