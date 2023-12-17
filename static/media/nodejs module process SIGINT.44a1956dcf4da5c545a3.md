# nodejs module process SIGINT

> SIGINT란 ctrl + c를 눌렀을 때 발생하는 시그널이다.

```js
process.on("SIGINT", () => {
  console.log("You've pressed ctrl + c!");
});
```
