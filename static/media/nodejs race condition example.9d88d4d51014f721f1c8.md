# nodejs race condition example

> nodejs는 자바스크립트(cpu)를 싱글 스레드에서 돌리기 때문에 연산으로 인한 race condition 버그는 발생하지 않는다.
>
> > 하지만 비동기 task(I/O)를 백그라운드 멀티 스레드에서 돌리기 때문에 순서로 인한 race condition 버그가 발생할 수 있다.

## problem

```ts
async function task1() {
  console.log("task1 start");
  await delay(1500);
  console.log("task1 end");
}

async function task2() {
  console.log("task2 start");
  await delay(1000);
  console.log("task2 end");
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const temp1 = task1();
  const temp2 = task2();
  await temp1;
  await temp2;
}
main();

// task1 start
// task2 start
// task2 end
// task1 end
```

## solution1

```ts
async function main() {
  await task1();
  await task2();
}
// task1 start
// task1 end
// task2 start
// task2 end
```

## solution2

### install

```sh
npm i async-mutex
```

```ts
import { Mutex } from "async-mutex";

const mutex = new Mutex();

async function task1() {
  const release = await mutex.acquire();
  try {
    console.log("task1 start");
    await delay(1500);
    console.log("task1 end");
  } finally {
    release();
  }
}

async function task2() {
  const release = await mutex.acquire();
  try {
    console.log("task2 start");
    await delay(1000);
    console.log("task2 end");
  } finally {
    release();
  }
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const temp1 = task1();
  const temp2 = task2();
  await temp1;
  await temp2;
}
main();
// task1 start
// task1 end
// task2 start
// task2 end
```
