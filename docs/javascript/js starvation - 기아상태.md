# js starvation - 기아상태

> task의 우선순위가 낮아서 실행을 하지 못하는 상태

```js
var done = false;
var counter = 0;

function makePromise() {
  if (counter < 5) {
    counter++;
    return new Promise(function c(resolve) {
      setTimeout(resolve, 0);
    });
  } else return Promise.resolve();
}

async function a() {
  let i = 0;
  while (!done) {
    await makePromise();
    console.log(`a: ${i++}`);
    if (i > 200) done = true;
  }
}

async function b() {
  let i = 0;
  while (!done) {
    await makePromise();
    console.log(`b: ${i++}`);
    if (i > 200) done = true;
  }
}

a();
b();
```
