# nodejs module timers

> timers 모듈은 setTimeout, setInterval, setImmediate, clearTimeout, clearInterval, clearImmediate 함수를 제공한다. (global 객체에 바인딩되어 있음)
>
> > timers/promises 모듈은 setTimeout, setInterval 함수를 Promise 기반으로 사용할 수 있게 해준다.

```js
import timer from "node:timers/promises";

await timer.setTimeout(1000); // delay

const interval = await timer.setInterval(1000, "hello");
for await (const value of interval) {
  console.log(value);
}
```
