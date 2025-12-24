# js Promise all

- Promise.all은 병렬 처리를 시켜주는 기능이 아니다
- 자바스크립트에서 비동기 함수는 async & await (또는 promise chaining)을 사용하지 않는 한 원래 병렬로 처리된다
- 즉 Promise.all은 여러개의 비동기 메소드를 await (blocking) 없이 처리해주는 기능 (결국 병렬 처리된다)
- Promise.all은 하나의 비동기 메소드라도 실패하면 전부 다 실패 함
- Promise.all로 트랜잭션을 구현하면 안된다 이유는 밑
- 트랜잭션 구현 시 Promise.allSettled를 사용

## 직렬 (블로킹)

> 앞의 작업이 끝나야 뒤의 작업이 실행됨
>
> > await를 순차적으로 나열하거나 for of 문을 사용하면 직렬

```ts
const res1 = await fetch(urls[0]);
const data1 = await res1.json();

const res2 = await fetch(urls[1]);
const data2 = await res2.json();
```

## 병렬

> Promise.all 또는 map 내에서 비동기 사용

```ts
const resArray = urls.map(url => fetch(url));

const resArray = await Promise.all([fetch(urls[0]), fetch(urls[1])]);
```

## 병렬 순차 처리

> then을 사용해서 처리된 값을 순차 처리

```ts
const requestList = [request("A"), request("B"), request("C")];

Promise.all(requestList).then(responses => {
  for (const response of responses) {
    console.log(response);
  }
});
```

```ts
const arr = ["A", "B", "C"];
const arrFunc = arr.map(type => request(type));

for (const func of arrFunc) {
  console.log(await func);
}
```
