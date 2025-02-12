# Stream

> ReadableStream

## polyfill

```sh
npm i web-streams-polyfill
```

## ReadableStream

> while문이나 재귀함수를 사용하여 stream이 done이 될때까지 계속 읽기

```js
const readableStream = new ReadableStream({
  start(controller) {
    /* … */
  },

  pull(controller) {
    /* … */
  },

  cancel(reason) {
    /* … */
  },
});

const reader = readableStream.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) {
    console.log("The stream is done.");
    break;
  }
  console.log("Just read a chunk:", value);
}
```
