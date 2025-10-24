# nodejs module stream interface writable

```js
const ws = fs.createWriteStream("file_path");
ws.write("hello, world");
ws.end(); // finish 이벤트 발생 // 쓰기가 끝났다는 것을 명시
ws.close(); // close 이벤트 발생 // 파일을 닫는 것
ws.on("finish", () => {});
ws.on("close", () => {});
ws.on("error", () => {});

// 직접 구현
new Writable({
  write(chunk, encoding, callback) {
    // chunk: 쓰기 위한 데이터
    // encoding: 인코딩 방식
    // callback: 쓰기가 끝났음을 알리는 콜백 함수
    console.log(chunk.toString()); // 데이터를 콘솔에 출력
    callback(); // 쓰기가 끝났음을 알림
  },
});
```
