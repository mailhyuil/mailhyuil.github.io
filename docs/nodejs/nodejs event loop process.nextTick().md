# nodejs event loop process.nextTick()

> nextTickQueue will be processed after the current operation is completed, regardless of the current phase of the event loop.
>
> event loop 단계와 상관없이 현재 작업이 완료된 후에 nextTickQueue가 처리된다
>
> > API 개발 시 event handler를 할당하는 함수를 반드시 비동기로 호출할 수 있게 보장한다.
> >
> > 또한 현재 실행된 함수의 호출 스택이 비워진 후에 실행되기 때문에, 콜백 함수가 현재 실행되는 함수의 결과를 참조할 수 있다. (defer로 사용 가능)

## bad

```ts
// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
function maybeSync(arg, cb) {
  if (arg) {
    cb();
    return;
  }

  fs.stat("file", cb);
}

const maybeTrue = Math.random() > 0.5;

// 비동기로 처리될 수도 있고 동기로 처리될 수도 있다, 예측할 수 없음
maybeSync(maybeTrue, () => {
  foo();
});

bar();
```

## good

```js
function definitelyAsync(arg, cb) {
  if (arg) {
    process.nextTick(cb);
    return;
  }

  fs.stat("file", cb);
}

// 항상 비동기로 처리됨
definitelyAsync(true, () => {
  foo();
});

bar(); // will now allways be called before foo()
```
