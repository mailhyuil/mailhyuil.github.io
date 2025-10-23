# express stream

```js
const fs = require("fs");

const stream = fs.createReadStream(resourcePath);

stream.on("data", function (data) {
  // data 이벤트가 발생되면 해당 data를 클라이언트로 전송
  res.write(data);
});

stream.on("end", function () {
  console.log("end streaming");
  response.end();
});

stream.on("error", function (err) {
  console.log(err);
  response.end("500 Internal Server " + err);
});
```
