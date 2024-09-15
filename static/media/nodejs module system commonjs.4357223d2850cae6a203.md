# js module commonjs

## add.js

```js
// add.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

## module wrapper 함수

> node.js에서 내보내진 모듈을 구성할 때 module wrapper 함수를 통해 모듈 내의 코드를 래핑한다.
>
> > nodejs가 위의 코드를 아래로 변환하여 호출한다.
> >
> > > module이라는 객체의 exports 프로퍼티에 넣는다.

```js
(function (exports, require, module, __filename, __dirname) {
  function add(a, b) {
    return a + b;
  }

  module.exports = add;
});
```
