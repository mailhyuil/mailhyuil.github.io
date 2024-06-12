# Option Type Pattern

> 값이 없는 상태를 null로 표현 시 발생하는 에러
>
> > throw new Error()로 처리시 이 함수를 사용할때마다 error handling을 해줘야한다는 번거러움
> >
> > > Option type을 사용하면 타입 시스템을 통해서 안정성을 얻을 수 있다.

```ts
type Some<T> = {
  _tag: "Some";
  value: T;
};

type None = {
  _tag: "None";
};

type Option<T> = Some<T> | None;

const some = <T>(value: T): Option<T> => ({
  _tag: "Some",
  value,
});

const none: Option<never> = {
  _tag: "None",
};

function divide(x: number): Option<number> {
  return x === 0 ? none : some(2 / x);
}

function main() {
  const result = divide(2);
  if (result._tag === "None") {
    console.log("Error: Division by zero");
    return;
  }
  console.log(result.value);
}

main();
```
