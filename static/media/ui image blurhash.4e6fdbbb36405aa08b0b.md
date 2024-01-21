# ui image blurhash

## insatll

```sh
npm i blurhash
```

## 사용

```js
const { encode, decode } = require("blurhash");

const blurhash = encode(width, height, data, numXComponents, numYComponents);
const imageData = decode(blurhash, width, height, punch);
```
