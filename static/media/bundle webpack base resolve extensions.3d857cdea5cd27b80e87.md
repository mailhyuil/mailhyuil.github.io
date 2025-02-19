# bundle webpack resolve extensions

> webpack의 기본 확장자 : .js, .json
>
> 이외의 확장자는 읽지 않는다.
>
> > extensions에 확장자를 추가하면 webpack이 해당 확장자를 처리할 수 있다.

```js
module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
};
```
