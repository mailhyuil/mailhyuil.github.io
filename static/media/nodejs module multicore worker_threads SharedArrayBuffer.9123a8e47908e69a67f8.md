# node worker_threads SharedArrayBuffer

## main.js

```js
const { fork } = require("child_process");

// 자식 프로세스 실행
const child = fork("./child.js");

child.on("message", message => {
  console.log("main got message:", message);
});

// 자식 프로세스에 작업 요청 (num 값 설정)
child.send({ num: 10000 });
```

## child.js

```js
const { Worker } = require("worker_threads");
const os = require("os");

process.on("message", async message => {
  const { num } = message;
  const workers = os.cpus().length;

  if (num) {
    // 🚀 SharedArrayBuffer 생성 (Int32Array 기준 workers 개수 + 완료 플래그 추가)
    const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * (workers + 1));
    const sharedArray = new Int32Array(sharedBuffer);

    const workerPromises = [];
    for (let i = 0; i < workers; i++) {
      const start = Math.floor((num / workers) * i);
      const end = Math.floor((num / workers) * (i + 1));

      workerPromises.push(
        new Promise(resolve => {
          const worker = new Worker("./worker.js", {
            workerData: { start, end, index: i, sharedBuffer },
          });
          worker.once("exit", resolve);
        }),
      );
    }

    // 모든 워커 완료 대기
    await Promise.all(workerPromises);

    // 🚀 모든 워커가 끝났음을 알림 (Atomics.notify 사용)
    Atomics.notify(sharedArray, workers, workers);

    // 최종 합산 후 부모 프로세스에 전송
    const totalSum = sharedArray.reduce((acc, cur) => acc + cur, 0);
    process.send(totalSum);
  }
  process.exit(0);
});
```

## worker.js

```js
const { workerData } = require("worker_threads");

const { start, end, index, sharedBuffer } = workerData;

// 🚀 SharedArrayBuffer에서 공유된 메모리 가져오기
const sharedArray = new Int32Array(sharedBuffer);

// 🚀 부분 합 계산
let sum = 0;
for (let i = start; i < end; i++) {
  sum += i;
}

// 🚀 Atomics를 사용하여 안전하게 공유 배열에 결과 저장
Atomics.store(sharedArray, index, sum);

// 워커 종료
process.exit(0);
```
