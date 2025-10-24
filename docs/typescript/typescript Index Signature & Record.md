# typescript Index Signature & Record

## Index Signature

> 객체에 문자열로 접근하는 방법
>
> > 문자열 리터럴을 Key로 사용하는 경우 오류가 발생합니다. 이런 경우 Record를 사용

```ts
let foo: any = {};
foo["Hello"] = "World";
console.log(foo["Hello"]); // World
```

## Index Signature Typing

```ts
{ [key: string | number]: string }
```

## `Record<Key, Type>`

> key값에 string을 사용할 수 있다.

## keyof

> key값을 추출

## typeof

> type값을 추출
