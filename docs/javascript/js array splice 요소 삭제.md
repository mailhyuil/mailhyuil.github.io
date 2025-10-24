# js array splice 요소 삭제

## 특정 인덱스의 요소 삭제

```js
array.splice(index, 1);
```

## splice(시작인덱스, 삭제할개수?, 추가할요소?)

> splice : (밧줄, 테이프등을) 잇다, 연결하다
>
> > 원본을 변경한다.
> >
> > > 원본의 데이터를 삭제하거나, 추가할 때 사용

```js
const arr = [0, 1, 2, 3, 4, 5];
arr.splice(0, 1); // [1,2,3,4,5]
arr.splice(-1); // [0,1,2,3,4]
arr.splice(0, 1, "hello"); // ['hello', 1, 2, 3, 4, 5]
console.log(arr);
```
