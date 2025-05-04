# Stream API Readable & Writable & Transform

## Readable

```js
// 직접 구현
const stream = new ReadableStream({
  start(controller) {
    // 스트림이 시작될 때 호출되는 메서드
    console.log("Stream started");
  },
  pull(controller) {
    // 스트림이 데이터를 요청할 때 호출되는 메서드
    console.log("Stream pulled");
    controller.enqueue("Hello, world!"); // 데이터를 스트림에 추가
  },
  cancel() {
    // 스트림이 취소될 때 호출되는 메서드
    console.log("Stream canceled");
  },
});
```

## Writable

```js
new WritableStream({
  write(chunk) {
    // 스트림에 데이터를 쓸 때 호출되는 메서드
    console.log("Writing:", chunk);
  },
  close() {
    // 스트림이 닫힐 때 호출되는 메서드
    console.log("Stream closed");
  },
  abort(err) {
    // 스트림이 중단될 때 호출되는 메서드
    console.error("Stream aborted:", err);
  },
});
```

## Transform

```js
new TransformStream({
  transform(chunk, controller) {
    // 스트림에 데이터를 변환할 때 호출되는 메서드
    console.log("Transforming:", chunk);
    controller.enqueue(chunk.toUpperCase()); // 데이터를 대문자로 변환하여 스트림에 추가
  },
  flush(controller) {
    // 스트림이 닫힐 때 호출되는 메서드
    console.log("Flushing remaining data...");
  },
});
```
