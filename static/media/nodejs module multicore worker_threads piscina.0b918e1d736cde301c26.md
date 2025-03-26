# piscina

> nodejs용 워커 스레드 풀 라이브러리

## install

```sh
npm i piscina
```

## usage

```js
const path = require("path");
const Piscina = require("piscina");

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
});

(async function () {
  const result = await piscina.run({ a: 4, b: 6 });
  console.log(result); // Prints 10
})();
```
