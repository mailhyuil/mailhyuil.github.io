# Stream

> ReadableStream, WritableStream, TransformStream, ByteLengthQueuingStrategy, CountQueuingStrategy

## ReadableStream

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
