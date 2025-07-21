# js reduce

> 그 전에 리턴된 값, 현재값이 중요
>
> > 리턴된 값 + 현재값을 리턴 시키면 누적값을 구할 수 있다.

```js
array.reduce((acc, cur, index, array) => {…}, 초깃값);

const arr = [1, 2, 3, 4, 5, 6];

arr.reduce((acc, cur, index, array) => {
  console.log(acc, cur, index, array);
  return acc + cur;
}, 0);
```

## 객체 배열 값 가져오기

> 초깃값에 빈배열 넣기

### 조건에 맞는 객체 이름 배열에 넣기

```js
let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
}, []); // [] 배열이 prev로 들어간다
```

### 나이 다 더하기

```js
let result = userList.reduce((prev, cur) => {
  prev += cur.age;
}, 0);
```
