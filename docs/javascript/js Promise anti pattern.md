# js Promise anti-pattern

> deferred anti-pattern
>
> > Promise를 Promise로 감싸지 마라 그냥 then chaining 하면 된다.

## bad

> constructor를 사용해서 promise를 연기시키려는 코드 (event emitter 처럼 사용)
>
> > promise then chaining을 사용할 수 없게된다.

```js
function getStuffDone(param) {
  return new Promise(function (resolve, reject) {
    myPromiseFn(param + 1)
      .then(function (val) {
        resolve(val);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}
```

## good

> 그냥 바로 써라

```js
function getStuffDone(param) {
  return myPromiseFn(param + 1); // much nicer, right?
}
```

## Promise constructor를 사용하는 경우

> 이미 있는 api를 Promise로 만들 때
>
> > You might have to use a deferred object when wrapping a callback API that doesn't follow the standard convention.

```js
function load() {
  return new Promise(function (resolve, reject) {
    window.onload = resolve;
  });
}

// use
load().then(function () {
  // Do things after onload
});
```
