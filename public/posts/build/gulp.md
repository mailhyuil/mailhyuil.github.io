# gulp

> 웹 개발 작업을 자동화하기 위한 툴킷
>
> > (e.g. 파일 변경을 감지하고 그에 따른 작업을 수행)

## install

```sh
npm i -g gulp-cli
npm i gulp
```

## gulpfile.js

```js
const { series, parallel, src, dest } = require("gulp");

function clean(cb) {
  // logic...
  cb();
}

function build(cb) {
  // logic...
  cb();
}

exports.build = build;
exports.default = series(clean, build);
```
