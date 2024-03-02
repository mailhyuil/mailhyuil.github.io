# 객체 리터럴에서 this

```ts
const obj = {
  name: 'hi',
  fn: function () {
    return this.name;
  },
};
```
