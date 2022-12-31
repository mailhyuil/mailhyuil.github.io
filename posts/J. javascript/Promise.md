# Promise

> 비동기 함수는 순서가 보장되지 않는다
>
> > 순서를 보장하기 위해 콜백함수를 사용
> >
> > > 콜백함수가 많아지면 콜백지옥
> > >
> > > > Promise는 콜백지옥을 해결하기 위한 API

## 콜백지옥

```
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

```
import fs from "fs";

const promise = () =>
  new Promise((resolve, reject) => {
    fs.readFile("./README.md", "utf-8", (err, data) => {
      resolve(data); // data를 .then의 콜백함수에 전달
    });
  });

promise().then((data) => console.log(data, 1));
promise().then((data) => console.log(data, 2));
promise().then((data) => console.log(data, 3));
```

## then 콜백함수의 리턴

> then의 콜백함수에서 값을 리턴하면 다음 then으로 잡아서 처리할 수 있다.

```
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

```
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
