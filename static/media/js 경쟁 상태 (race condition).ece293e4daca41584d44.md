# js 경쟁 상태

## 경쟁 상태

```js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let x = 0;

const foo = async () => {
  await delay(500);
  let y = x;
  await delay(500); // 비동기 함수 호출
  x = y + 1;
  await delay(500);
};

const main = async () => {
  console.log(`initial x = ${x}`);
  await Promise.all([foo(), foo(), foo()]);
  console.log(`final x = ${x}`); // 세개의 비동기 함수가 경쟁 상태가 되어 값이 1이 된다

  //   await foo();
  //   await foo();
  //   await foo();
  //   console.log(x); // 순차적으로 실행하면 값이 3이 된다
};

main();
```

## 해결 방법 (mutex 사용)

```js
// mutex 구현
const lock = new WeakMap();
async function using(resource, then) {
  while (lock.has(resource)) {
    try {
      await lock.get(resource);
    } catch {}
  }

  const promise = Promise.resolve(then(resource));
  lock.set(resource, promise);

  try {
    return await promise;
  } finally {
    lock.delete(resource);
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let x = 1;
const mutex = {};

const foo = async () => {
  await delay(500);
  await using(mutex, async () => {
    let y = x;
    await delay(500);
    x = y + 1;
  });
  await delay(500);
};

async function main() {
  console.log(`initial x = ${x}`);
  await Promise.all([foo(), foo(), foo()]);
  console.log(`final x = ${x}`);
}

main();
```
