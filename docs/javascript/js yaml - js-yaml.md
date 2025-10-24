# js yaml - js-yaml

> yaml을 js object로 변환

## install

```sh
npm i js-yaml
```

## usage

```js
const yaml = require("js-yaml");
const fs = require("fs");

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync("/home/ixti/example.yml", "utf8"));
  console.log(doc);
} catch (e) {
  console.log(e);
}
```
