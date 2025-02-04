# animation countup.js

> 숫자를 증가시키는 애니메이션을 구현해주는 라이브러리

## install

```sh
npm i countup.js
```

## usage

```js
const countUp = new CountUp("targetId", 5234, { onCompleteCallback: someMethod });

// or (passing fn to start will override options.onCompleteCallback)
countUp.start(someMethod);

// or
countUp.start(() => console.log("Complete!"));
```
