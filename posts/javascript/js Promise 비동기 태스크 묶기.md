# js Promise 비동기 태스크 묶기

> 비동기 태스크가 끝날때까지 기다리는 방법

```js
const result = await new Promise(async (resolve, reject) => {
  await delay(1000);
  await delay(1000);
  await delay(1000);
  const res = await axios.get("https://file-server/file", form);
  resolve(res);
});
```
