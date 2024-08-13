# input file object-to-formdata

> boolean과 number는 string으로 변환됩니다.

## install

```sh
npm i object-to-formdata
```

## usage

```js
import { serialize } from "object-to-formdata";

const object = {
  name: "John",
  age: 30,
  city: "New York",
  file: new File(["foo"], "foo.txt", {
    type: "text/plain",
  }),
};

const formData = serialize(object);
```
