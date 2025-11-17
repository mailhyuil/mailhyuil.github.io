# algorithm base Big O

> 시간 복잡도와 공간 복잡도를 표현하는 방법

## 시간 복잡도

```js
function sum(n) {
  let result = 0;
  for (let i = 1; i <= Math.min(10, n); i++) {
    // Math.min(10, n)은 10과 n 중 작은 값을 반환 시간 복잡도 O(1)
    result += i;
  }
  return result;
}
```

## 공간 복잡도

> primitive = O(1)
>
> > string, object = O(n)
