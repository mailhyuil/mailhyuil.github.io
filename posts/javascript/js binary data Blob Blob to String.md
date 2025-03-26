# Blob to String

```js
const blob = new Blob(["hello, world"], { type: "text/plain" });

const reader = new FileReader();

// readAsText가 호출되면 발생하는 이벤트
reader.onload = (event: any) => {
  this.stream.set(event.target.result);
};

// 파일 읽기
reader.readAsText(blob);
```
