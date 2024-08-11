# js for

## for (const key in obj)

> 객체의 key를 순회 (배열도 객체이기 때문에 사용 가능)
>
> > key in obj 를 생각

```js
for (const key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
```

```js
// array의 key는 index이기 때문에
for(const index in arr) {
    console.log(`${index} = ${arr[index]}`);
}​
```

## for (const value of iterable)

> 컬렉션 전용 반복 구문 (Array, Map, Set, String, TypedArray, arguments, NodeList 등)
>
> > [Symbol.iterator] 속성을 가지는 컬렉션 전용
> >
> > Object는 Symbol.iterator 속성을 가지지 않음

```js
const arr = [1, 2, 3, 4];

for (const value of arr) {
  console.log(`${value}`);
}

// iterable의 entries() 메서드를 사용하여 index와 value를 동시에 사용
for (const [index, value] of arr.entries()) {
  console.log(`${i}:${value}`);
}
```
