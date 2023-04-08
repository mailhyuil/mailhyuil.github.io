# algorithm js 자료구조

# array

> 동적 배열
>
> > 스택 자료구조 역할

## 2차원 array

```js
let arr = Array.from(Array(4), () => new Array(5));
```

```js
let arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Array.from({ lenght: 4 }, (undefined, j) => i * 4 + j);
}
```
