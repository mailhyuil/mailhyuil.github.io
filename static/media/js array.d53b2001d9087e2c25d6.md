# js array

> js의 array는 일반적인 array(밀집배열/dense array)와는 다르다.
>
> > js의 array는 sparse array이다. (희소(밀도가 희박한)배열)
> >
> > > 배열을 따라한 객체이다.

## sparse array

> integer값을 object에 매핑 시킨다.
>
> > integer값을 key로 사용한다.

## index key

> js array에 값을 넣으면
>
> > 자동으로 0부터 시작하는 index key가 부여된다. (일반 배열은 key가 없다)

```js
// 임의로 키 넣어보기
const arr = [];
arr[0] = 1;
arr[10] = 2;
console.log(arr);
// 출력 [ 1, <9 empty items>, 2 ]
// 정수 값의 index는 생략되서 보임

// 정수 대신 문자열을 넣어도 된다.
const arr = [];
arr["hi"] = 1;
arr["hello"] = 2;
console.log(arr);
// 출력 [ hi: 1, hello: 2 ]
```

## 시간 복잡도

```txt
push() : O(1)
pop() : O(1)
shift() : O(n)
unshift() : O(n)
splice() : O(n)
slice() : O(n)
forEach() : O(n)
map() : O(n)
filter() : O(n)
reduce() : O(n)
concat() : O(n)
indexOf() : O(n)
find() : O(n)
findIndex() : O(n)
includes() : O(n)
some() : O(n)
every() : O(n)
```
