# nest static assets 파일 읽기

## src/assets

> 파일 넣으면 dist/assets에 복사됨

## 읽기

```ts
require(join(__dirname, "assets", "hello.txt"));
readFile(join(__dirname, "assets", "hello.txt"), "utf8");
createReadStream(join(__dirname, "assets", "hello.txt"));
```
