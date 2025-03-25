# nodejs event-loop process.nextTick

> main thread에서 무거운 작업을 하면 이벤트 루프를 block하게 된다
>
> > 이때 nextTick을 사용하여 무거운 작업을 나눠서 실행하여 block을 피할 수 있다
> >
> > > bcryptjs 같은 main thread만 사용하는 패키지들을 이런 방법으로 block을 피한다
> > >
> > > > 또는 go의 defer와 비슷한 기능을 구현할 수 있다
> > > >
> > > > 작업 정리 후 에러
> > > >
> > > > 메소드 실행 후 후처리

## main thread blocking 방지

```js
function heavyTask() {
  let i = 0;
  const inner = () => {
    if (i >= 1_000_000_000) return console.log("done");
    for (let j = 0; j < 100_000; j++) {
      i++;
    }
    process.nextTick(inner); // 👈 다음 tick에서 이어서 (setImmediate, setTimeout으로도 구현가능)
  };
  inner();
}

heavyTask();
console.log("next work");
```

## defer

```ts
function doSomething(cb) {
  cb(); // 콜백에서 에러가 발생하거나, 콜백이 비동기일 경우 후처리를 못함
  process.nextTick(() => {
    console.log("✅ callback 이후 후처리");
  });
}
```

```js
process.nextTick(() => {
  // 모든 작업, 리소스 정리를 마친 후에 실행
  throw new Error("🔥");
});
```

## 브라우저에서 구현 (bcryptjs)

```js
var nextTick =
  typeof process !== "undefined" && process && typeof process.nextTick === "function"
    ? typeof setImmediate === "function"
      ? setImmediate
      : process.nextTick
    : setTimeout;
```
