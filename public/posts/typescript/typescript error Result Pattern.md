# typescript error Result Pattern

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
