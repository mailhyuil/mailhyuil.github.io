# nodejs module path 확장자 제거 (remove filename extension)

```js
const path = require("path");
const originalName = path.parse("hello.png").name;
console.log(originalName); // hello
```
