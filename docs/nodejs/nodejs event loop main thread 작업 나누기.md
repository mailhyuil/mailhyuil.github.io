# nodejs event-loop setImmediate or setTimeout

> main thread에서 무거운 작업을 하면 이벤트 루프를 block하게 된다
>
> > 이때 setImmediate을 사용하여 무거운 작업을 나눠서 실행하여 block을 피할 수 있다 (nextTick은 사용하면 안됨)
> >
> > > bcryptjs 같은 main thread만 사용하는 패키지들을 이런 방법으로 block을 피한다

## setImmediate / setTimeout / Promise.resolve().then() / queueMicrotask

```js
function heavyTask() {
  let i = 0;
  const inner = () => {
    if (i >= 1_000_000_000) return console.log("done");
    for (let j = 0; j < 100_000; j++) {
      i++;
    }
    setImmediate(inner); // 👈 다음 tick에서 이어서 (setTimeout으로도 구현가능) (Promise.resolve().then(), queueMicrotask로도 구현가능)
  };
  inner();
}

heavyTask();
console.log("next work");
```

## async-iterator

```js
async function* heavyTaskGenerator() {
  let i = 0;
  while (i < 1_000_000_000) {
    for (let j = 0; j < 100_000; j++) {
      i++;
    }
    yield; // 다음 tick으로 넘어감
  }
  console.log("done");
}

async function heavyTask() {
  for await (const _ of heavyTaskGenerator()) {
    // 각 yield마다 이벤트 루프가 다른 작업을 처리할 수 있음
  }
}

heavyTask();
console.log("next work");
```
