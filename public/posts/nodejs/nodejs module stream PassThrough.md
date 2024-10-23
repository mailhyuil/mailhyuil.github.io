# nodejs module stream PassThrough

> PassThrough is a simple transform stream that passes the input stream data to the output. It is useful when you want to use a stream in your code but you don't want to modify the data.
>
> > 데이터를 변형하지 않는다면 PassThrough 스트림을 사용하면 된다.

```js
const { PassThrough } = require("stream");

const pass = new PassThrough();

pass.on("data", chunk => {
  console.log(chunk.toString());
});

pass.write("Hello, ");
pass.write("world!");

pass.end();
```
