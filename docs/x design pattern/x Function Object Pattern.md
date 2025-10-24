# x Function Object Pattern

```ts
function defaultThrowError() {
  throw new Error();
}

let throwErrorFn = defaultThrowError;

export function throwError() {
  throwInvalidWriteToSignalErrorFn();
}

export function setThrowError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}

throwError();

setThrowError(() => {
  throw new Error("New Error!");
});

throwError();
```
