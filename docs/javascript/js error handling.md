# js 에러 핸들링

> `<https://httpstst.us/500>` 에러던져주는 api

## Uncaught Error

> 에러를 핸들링 하지 않을 때 나오는 메시지
>
> > catch 되지 않은 에러

## 에러 던지기?

> 던지면 프로그램은 끝나버린다.
>
> > 개발자를 위한것일 뿐

```js
if (!Array.isArray(something)) throw new Error("something은 배열을 받아요!.");
something.forEach();
```

## 에러 핸들링

> 흐름이 끊기지 않게!
>
> > 클라이언트를 위한 것!
> >
> > > 비동기는 await를 시키거나 callback 내에서 try catch를 해야한다.

```js
function foo() {
  try {
    doSomething();
  } catch (err) {
    console.error("에러가 잡혔네요~", err);
  }
}

foo();

console.log("이후에도 동작합니다~");
```

## 에러는 예외적인 상황에서 하는게 좋다

> 방어적 프로그래밍
>
> > 내가 제어할 수 없는 상황

```js
async function bar(url) {
  const res = await fetch(url);
  if (!res.ok) return Promise.reject(`ok가 아님 ${res.status}`); // 비동기에서는 throw 보다 Promise가 더 정확
  const data = await res.json();
  return data;
}

async function foo() {
  try {
    const res = await bar("https://httpstat.us/500");
    return res;
  } catch (e) {
    console.error("여기서 에러가 잡혔네, 통신에 오류가 있는 듯", e);
  }
}
```
