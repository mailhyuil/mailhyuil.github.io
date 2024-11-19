# js array if array.length

> if문으로 사용시에는 length 가능
>
> > 값을 할당하는것에서는 불가능 0이 할당되어버림

```js
// ok
if (arr.length) {
  console.log("array is not empty");
}
arr.length && console.log("array is not empty");

// wrong
const num = array.length && array[0];
```
