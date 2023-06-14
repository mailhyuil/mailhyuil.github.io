# js deadlock

> 두개 이상의 공유자원이 있을 때 두개 이상의 task가 각 자원을 선점하고 서로의 공유자원을 사용하려고 끊임없이 기다리는 상태

```js
function makeFuture() {
  let resolve;
  let reject;
  let promise = new Promise((d, e) => {
    resolve = d;
    reject = e;
  });
  return [promise, resolve, reject];
}

class Lock {
  constructor() {
    this.q = [];
    this.running = false;
  }
  async runQueue() {
    if (this.running) return;
    this.running = true;
    while (this.q.length > 0) {
      const { asyncFunction, resolve, reject } = this.q.shift();
      try {
        let result = await asyncFunction();
        resolve(await asyncFunction());
      } catch (error) {
        reject(error);
      }
    }
    this.running = false;
  }
  runTask(asyncFunction) {
    const [promise, resolve, reject] = makeFuture();
    this.q.push({ asyncFunction, resolve, reject });
    this.runQueue();
    return promise;
  }
}

const dbLock = new Lock();

let taskResultPromise = dbLock.runTask(async () => {
  console.log("about to deadlock");
  let value = await dbLock.runTask(async () => {
    return "value";
  });
  value; //?
  console.log("did not deadlock");
  return value;
});
```
