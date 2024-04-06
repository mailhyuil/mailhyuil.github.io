# js slice & splice

> 시간복잡도 O(n)
>
> > slice를 사용하자

## slice(시작인덱스, 끝인덱스?)

> 끝인덱스는 포함되지 않는다.
>
> > 새로운 배열 리턴
> >
> > > substring()과 같은 기능

```js
const arr = [0, 1, 2, 3, 4, 5];
arr.slice(); // [0, 1, 2, 3, 4, 5]
arr.slice(0, 1); // [0]
arr.slice(-1); // [5]
arr.slice(0, n); // n개의 요소를 가진 새로운 배열 리턴
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
