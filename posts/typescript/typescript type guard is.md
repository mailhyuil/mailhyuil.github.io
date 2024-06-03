# typescript is

> 매개변수를 Type으로 보라는 뜻
>
> > 컴파일 단계에서만 동작
> >
> > > isString 같은 함수(type guard)를 만드는데 사용

```ts
function isString(test: any): test is string {
  return typeof test === "string";
}

function example(foo: any) {
  if (isString(foo)) {
    console.log("it is a string" + foo);
    console.log(foo.length); // string function
  }
}
example("hello world");
```

## rxjs filter에서 사용

```ts
pipe(
  filter((x): x is Foo => x instanceof Foo),
  map((x) => x.bar)
);
```
