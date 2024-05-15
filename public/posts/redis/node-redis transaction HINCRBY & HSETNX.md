# node-redis transaction HINCRBY & HSETNX

> read and write를 하지 말고 바로 write해라

```js
client.hincrby("cats:1", "age", 1, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

client.hsetnx("cats:1", "name", "hyuil", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
```
