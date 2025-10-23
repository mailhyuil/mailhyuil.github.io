# typescript type extends in

> extends와 함께 key가 전부 일치하는지 확인

```ts
type Type<T> = FormGroup<T extends { [Key in keyof T]: unknown}>
```
