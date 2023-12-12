# js await forEach / map

> forEach와 map 내에서는 await를 블로킹하지 않는다.
>
> > 블로킹되지 않으면 순차처리를 할 수 없어서 문제.

## 병렬

```js
function foo() {
  urls.forEach(async (url) => {
    console.log(`${url} 요청 시작`);
    const res = await fetch(baseURL + url);
    const result = await res.json();
    console.log(`${url} 요청 끝`);
  });
  console.log("전체 요청 끝");
}
```

## 비동기 반복 사용

```js
for await (const chunk of stream) {
  console.log(chunk);
}
```

## 순차 처리

> for of는 await를 기다려준다.

```js
async function foo() {
  for (let url of urls) {
    console.log(`${url} 요청 시작`);
    const res = await fetch(baseURL + url);
    const result = await res.json();
    console.log(`${url} 요청 끝`);
  }
  console.log("전체 요청 끝");
}
```

```ts
const requests = [request("A"), request("B"), request("C")];

Promise.all(requests).then((responses) => {
  for (const response of responses) {
    console.log(response);
  }
});
```

```ts
const arr = ["A", "B", "C"];
const arrFunc = arr.map((type) => request(type));

for (const func of arrFunc) {
  console.log(await func);
}
```
