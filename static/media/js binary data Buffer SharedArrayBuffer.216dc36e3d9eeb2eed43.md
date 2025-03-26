# SharedArrayBuffer

> ArrayBuffer와 비슷하지만 여러 스레드 간에 공유할 수 있는 버퍼 (worker_threads에서 사용)

```js
// 🚀 SharedArrayBuffer 생성 (Int32Array 기준 workers 개수 + 완료 플래그 추가)
const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * (workers + 1));

// 🚀 SharedArrayBuffer에서 공유된 메모리 가져오기
const sharedArray = new Int32Array(sharedBuffer);

// 🚀 모든 워커가 끝났음을 알림 (Atomics.notify 사용)
Atomics.notify(sharedArray, workers, workers);

// 최종 합산 후 부모 프로세스에 전송
const totalSum = sharedArray.reduce((acc, cur) => acc + cur, 0);
```
