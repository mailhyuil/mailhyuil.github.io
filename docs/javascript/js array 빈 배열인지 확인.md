# js array 빈 배열인지 확인

```js
if (obj && obj.arr && obj.arr.length > 0) {
}
// 0 은 false, 양수, 음수는 true, length는 0부터 양수니까 그냥 이렇게 써도 괜춘
if (obj?.arr?.length) {
}
```
