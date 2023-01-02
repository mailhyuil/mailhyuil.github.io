# Promise

> 비동기 함수는 순서가 보장되지 않는다
>
> > 순서를 보장하기 위해 콜백함수를 사용
> >
> > > 콜백함수가 많아지면 콜백지옥
> > >
> > > > Promise는 콜백지옥을 해결하기 위한 API

## 콜백지옥

```js
import fs from "fs";

fs.readFile("./README.md", "utf-8", (err, data) => {
  console.log(data, 1);
  fs.readFile("./README.md", "utf-8", (err, data) => {
    console.log(data, 2);
    fs.readFile("./README.md", "utf-8", (err, data) => {
      console.log(data, 3);
      fs.readFile("./README.md", "utf-8", (err, data) => {
        console.log(data, 4);
        fs.readFile("./README.md", "utf-8", (err, data) => {
          console.log(data, 5);
        });
      });
    });
  });
});
```

## resolve

> resolve(data)는 data를 .then의 콜백함수에 전달
>
> > then의 콜백함수에서 값을 리턴하면 다음 then으로 잡아서 처리할 수 있다.

```js
import fs from "fs";

const promise = () =>
  new Promise((resolve, reject) => {
    fs.readFile("./README.md", "utf-8", (err, data) => {
      resolve(data); // data를 .then의 콜백함수에 전달
    });
  });

promise()
  .then((data) => data + "1")
  .then((data) => data + "2")
  .then((data) => data + "3")
  .then((data) => data + "4")
  .then((data) => console.log(data));
```

## reject

> reject(error)는 error를 .catch의 콜백함수에 전달

```js
import fs from "fs";

const promise = () =>
  new Promise((resolve, reject) => {
    reject(new Error("Errrrrr")); // error를 .catch의 콜백함수에 전달
    fs.readFile("./README.md", "utf-8", (err, data) => {
      resolve(data);
    });
  });

promise()
  .then((data) => console.log(data, 1))
  .catch((err) => console.error(err));
```

## to make async function

1. Promise를 리턴시키기
2. async 키워드 사용하기

```
const a = async () => {
  return 1;
};
const b = async () => {
  return 2;
};
const c = async () => {
  return 3;
};
const d = async () => {
  const data = Promise.all([a(), b(), c()]);
  return data;
};

d().then((e) => {
  console.log(e);
});

console.log("this is called first");
```
