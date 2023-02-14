# js for

## forEach

> Array 객체에서만 사용 가능

```
arr.forEach((element, index) => {
    console.log(`${index} = ${element}`);
});
```

## for in

> 객체의 속성들을 반복하여 작업을 수행
>
> > 객체의 모든 열거 가능한 속성에 대해 반복

```
(value, key) in obj
```

```
for(const index in arr) {
    console.log(`${index} = ${arr[index]}`);
}​
```

## for of

> 컬렉션 전용 반복 구문
>
> > [Symbol.iterator] 속성을 가지는 컬렉션 전용

```
for(const [ index, element ] of elements) {
    console.log(`${index} = ${element}`);
}
```
