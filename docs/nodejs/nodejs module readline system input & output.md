# system input & output

> node `<filename>`으로 run

## 한줄 입력

```js
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", line => {
  console.log("hello !", line);
  rl.close();
}).on("close", () => {
  process.exit();
});
```
