# nodejs event-loop process.nextTick

> main thread에서 무거운 작업을 하면 이벤트 루프를 block하게 된다
>
> > 이때 nextTick을 사용하여 무거운 작업을 나눠서 실행하여 block을 피할 수 있다
> >
> > > bcryptjs 같은 main thread만 사용하는 패키지들을 이런 방법으로 block을 피한다

```js
let i = 0;

function heavyLoop() {
  if (i >= 1_000_000_000) return console.log("done");
  for (let j = 0; j < 100_000; j++) {
    i++;
  }
  process.nextTick(heavyLoop); // 👈 다음 tick에서 이어서
}

heavyLoop();
console.log("next work");
```

## 브라우저에서 구현

```js
var nextTick =
  typeof process !== "undefined" && process && typeof process.nextTick === "function"
    ? typeof setImmediate === "function"
      ? setImmediate
      : process.nextTick
    : setTimeout;
```
