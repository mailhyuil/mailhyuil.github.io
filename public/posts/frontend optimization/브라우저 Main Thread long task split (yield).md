# front optimization yield

> long task를 나누는 방법
>
> > delay를 0으로 줘서 long task를 나눌 수 있다
> >
> > > 작게 나눠지면 중간에 다른 일을 수행할 수 있다.

```js
function yield() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
```

## navigator.scheduling.isInputPending()

> check whether there are pending input events in the event queue
>
> > pending 상태의 input event가 있는지 확인

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```
