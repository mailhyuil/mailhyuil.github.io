# nodejs json stream

> json이 너무 크면 메모리 부족이 발생할 수 있다.
>
> > JSONStream을 사용하여 데이터를 스트림으로 가져와 메모리 부족을 방지한다.

## install

```sh
npm i JSONStream
```

## usage

```ts
const request = require("request");
const JSONStream = require("JSONStream");
const es = require("event-stream");

request({ url: "http://isaacs.couchone.com/registry/_all_docs" })
  .pipe(JSONStream.parse("rows.*"))
  .pipe(
    es.mapSync(function (data) {
      console.error(data);
      return data;
    }),
  );
```
