# js Promise

> await는 블로킹이다
>
> > top-level에서 await를 사용하면 블로킹
> >
> > > async로 감싸줘야 비동기로 처리됨
> > >
> > > > (i.e. await는 stack에서 처리 됨)

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

## promise fulfilled rejected

```ts
useApi("/asodfi").then(
  (res) => {
    // fulfilled callback
    console.log("fulfilled", res);
  },
  (rej) => {
    // rejected callback
    console.log("rejected", rej);
  }
);
```

## Promise.all

```js
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
  const data = Promise.all([a(), b(), c()]); // Promise.all([Promise... ]) 한번에 받기
  return data;
};

d().then((e) => {
  console.log(e);
});

console.log("this is called first");
```

## new Promise() vs Promsie.resolve()

```ts
function async1(param: number) {
  return new Promise(function (resolve, reject) {
    resolve(param * 2);
  });
}

// equals

function async2(param: number) {
  return Promise.resolve(param * 2);
}
```
