# js iterator generator interator 생성 & async interator 생성

## Iterator 생성

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let value of generateSequence(1, 5)) {
  alert(value); // 1, then 2, then 3, then 4, then 5
}
```

## Async Iterator 생성

```js
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    // await를 사용할 수 있습니다!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, 2, 3, 4, 5
  }
})();
```
