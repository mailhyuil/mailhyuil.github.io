# nodejs module process stdin & stdout & stderr

```js
const process = require("process");

process.stdin.resume(); // stdin
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (chunk) {
  process.stdout.write("data: " + chunk); // stdout
});
```
