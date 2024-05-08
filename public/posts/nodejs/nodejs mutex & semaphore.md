# nodejs Mutex & Semaphore

> 여러 스레드 또는 프로세스가 공유 자원에 접근할 때, 동시에 접근하는 것을 막기 위한 방법
>
> > 자료구조의 일종이다!

## install

```sh
npm i async-mutex
```

## mutex.js

```ts
const _awaitUnlock = async (mutex) => {
  // 잠금 상태가 아님 -> 즉시 resolve
  if (!mutex._locked) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    // 0.1초 후에 다시 확인
    setTimeout(() => {
      _awaitUnlock(mutex).then(() => resolve());
    }, 100);
  });
};

class Mutex {
  constructor() {
    this._locked = false;
  }

  async lock() {
    // 잠금 상태가 풀릴 때 까지 대기
    await _awaitUnlock(this);
    this._locked = true;
  }

  // 잠금 해제는 별도의 제약을 주지 않음.
  release() {
    this._locked = false;
  }
}

export default Mutex;
```

## usage

```ts
const mutex = new Mutex();

const parallelLogic = async () => {
  await mutex.lock(); // 여기서 mutex가 유휴 상태일 때 까지 대기하며, 유휴 상태가 되면 잠금을 걸고 진행한다.
  try {
    // ..비즈니스 로직..
  } finally {
    mutex.release(); // 반드시 실행한다. 그렇지 않으면 Dead-lock 발생함.
  }
};
```
