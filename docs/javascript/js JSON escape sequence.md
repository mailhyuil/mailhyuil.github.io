# js JSON escape sequence

> json string에는 escape sequence 두개있어야한다.
>
> > 하나면 string 자체에서 작동해버린다.

```js
// ok
const ok = '{"test":"test\\ntest"}';
const res1 = JSON.parse(ok);
console.log(res1);

// wrong
const wrong = '{"test":"test\ntest"}';
const res2 = JSON.parse(wrong);
console.log(res2);
```

## url encode나 base64 encode가 되면 escape sequence가 사리지니까 작동한다

```js
const username = "안녕\n하세요";
const password = "123123213";
fetch("http://localhost:3000/api/v1/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: `{"username":"${encodeURI(username)}","password":${password}}`,
});
```
