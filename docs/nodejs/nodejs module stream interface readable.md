# nodejs module stream interface readable

```js
const rs = fs.createReadStream("file_path", { encoding: "utf8" });
rs.on("data", () => {});
rs.on("end", () => {});
rs.on("error", () => {});

// 직접 구현
new Readable({
  read(size) {
    // size 만큼 읽어오는 로직
    this.push("hello world"); // 스트림에 데이터를 푸시
    this.push(null); // 더 이상 읽을 데이터가 없음을 알림
  },
});
```
