# nodejs module fs file stat

```js
const fs = require("fs");
const stat = fs.statSync("hello.txt");

stat.isFile(); // true
stat.isDirectory(); // false
stat.size; // 12
stat.mtime; // 2021-08-31T07:00:00.000Z
stat.birthtime; // 2021-08-31T07:00:00.000Z
```
