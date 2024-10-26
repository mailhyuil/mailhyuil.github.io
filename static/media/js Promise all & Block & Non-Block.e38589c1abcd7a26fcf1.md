# js Promise all & Block & Non-Block

> await, then chain

```js
const delay = (ms, msg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve("success");
    }, ms);
  });

const block = async () => {
  console.time("delay");
  await delay(1000, "1");
  await delay(1000, "2");
  await delay(1000, "3");
  console.timeEnd("delay");
};
const promiseAll = async () => {
  console.time("delay");
  await Promise.all([delay(1000, "1"), delay(1000, "2"), delay(1000, "3")]);
  console.timeEnd("delay");
};
const promiseAllSettled = async () => {
  console.time("delay");
  await Promise.allSettled([delay(1000, "1"), delay(1000, "2"), delay(1000, "3")]);
  console.timeEnd("delay");
};
const nonBlock = async () => {
  console.time("delay");
  delay(1000, "1");
  delay(1000, "2");
  delay(1000, "3");
  console.timeEnd("delay");
};

promiseAll();
```
