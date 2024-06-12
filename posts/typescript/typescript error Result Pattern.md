# typescript error Result Pattern

> Result 또는 Either 라고 불리는 객체를 리턴ㄴ하여 에러를 처리하는 방법

## Result (Either)

```ts
type Ok<ValueType> = {
  readonly _tag: "Ok";
  readonly value: ValueType;
};
type Err<ErrorType> = {
  readonly _tag: "Err";
  readonly error: ErrorType;
};
type Result<ValueType, ErrorType> = Ok<ValueType> | Err<ErrorType>;
```

## wrap / unwrap

```ts

```

## match

```ts

```
