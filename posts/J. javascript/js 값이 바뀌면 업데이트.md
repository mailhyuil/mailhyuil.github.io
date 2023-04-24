# 값이 바뀌면 업데이트

```js
const some = value; // 이렇게 쓰지 말고
const some = () => value; // 이렇게 해서 바뀔 때 호출하기

// computed(()=>value)도 비슷한 구조
```
