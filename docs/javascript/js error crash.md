# js error crash

> 예외가 처리되지 않는 경우(catch) 프로세스는 멈춘다.
>
> (e.g. uncaughtException, unhandledRejection, SyntaxError, RangeError...)
>
> > 프레임워크, 라이브러리에서 기본적으로 자주 발생하는 에러에 대해서는 처리 로직이 작성되어 있음 (express 에러 미들웨어, nestjs exception filter 등)

```js
/// error를 catch하면 프로세스가 멈추지 않는다.
function caughtErrorFn() {
  setInterval(() => {
    console.log("running");
  }, 1000);
  setTimeout(() => {
    throw new Error("error");
  }, 3000);
}
caughtErrorFn();

/// error를 catch하지 않으면 프로세스가 멈춘다.
function uncaughtErrorFn() {
  setInterval(() => {
    console.log("running");
  }, 1000);
  setTimeout(() => {
    try {
      throw new Error("error");
    } catch (error) {
      console.log(error);
    }
  }, 3000);
}
uncaughtErrorFn();
```
