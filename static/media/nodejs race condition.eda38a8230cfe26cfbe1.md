# nodejs race condition

> nodejs는 자바스크립트(cpu)를 싱글 스레드에서 돌리기 때문에 연산으로 인한 race condition 버그는 발생하지 않는다.
>
> > 하지만 비동기 task(I/O)를 백그라운드 멀티 스레드에서 돌리기 때문에 순서로 인한 race condition 버그가 발생할 수 있다.

## problem

```ts
// Utility function to simulate some delay (e.g. reading from or writing to a database).
// It will take from 0 to 50ms in a random fashion.
const randomDelay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 100));

// Our global balance.
// In a more complete implementation, this will live in the persistent data storage.
let balance = 0;

async function loadBalance() {
  // simulates random delay to retrieve data from data storage
  await randomDelay();
  return balance;
}

async function saveBalance(value) {
  // simulates random delay to write the data to the data storage
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  const balance = await loadBalance();
  console.log(`sellGrapes - balance loaded: ${balance}`);
  const newBalance = balance + 50;
  await saveBalance(newBalance);
  console.log(`sellGrapes - balance updated: ${newBalance}`);
}

async function sellOlives() {
  const balance = await loadBalance();
  console.log(`sellOlives - balance loaded: ${balance}`);
  const newBalance = balance + 50;
  await saveBalance(newBalance);
  console.log(`sellOlives - balance updated: ${newBalance}`);
}

async function main() {
  const transaction1 = sellGrapes(); // NOTE: no `await`
  const transaction2 = sellOlives(); // NOTE: no `await`
  await transaction1; // NOTE: awaiting here does not stop `transaction2`
  // from being scheduled before transaction 1 is completed
  await transaction2;
  const balance = await loadBalance();
  console.log(`Final balance: ${balance}`);
}

main();
```

## solution

### install

```sh
npm i async-mutex
```

```ts
import { Mutex } from "async-mutex";

const randomDelay = () => {
  /* ... */
};

let balance = 0;
const mutex = new Mutex(); // global mutex instance

async function loadBalance() {
  /* ... */
}
async function saveBalance(value) {
  /* ... */
}

async function sellGrapes() {
  // this code will need exclusive access to the balance
  // so we consider this to be a critical path
  const release = await mutex.acquire(); // get access to the critical path (or wait in line)
  try {
    const balance = await loadBalance();
    console.log(`sellGrapes - balance loaded: ${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`sellGrapes - balance updated: ${newBalance}`);
  } finally {
    release(); // completes work on the critical path
  }
}

async function sellOlives() {
  // similar to `sellGrapes` this is a critical path because
  // it needs exclusive access to balance
  const release = await mutex.acquire();
  try {
    const balance = await loadBalance();
    console.log(`sellOlives - balance loaded: ${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`sellOlives - balance updated: ${newBalance}`);
  } finally {
    release();
  }
}

async function main() {
  // Here we can call many events safely, the mutex will guarantee that the
  // competing events are executed in the right order!
  await Promise.all([sellGrapes(), sellOlives(), sellGrapes(), sellOlives(), sellGrapes(), sellOlives()]);
  const balance = await loadBalance();
  console.log(`Final balance: ${balance}`);
}

main();
```
