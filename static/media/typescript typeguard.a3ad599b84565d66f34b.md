# typescript typeguard

> in, typeof, instanceof를 사용
>
> > type narrowing을 위해 사용

```ts
function isFish(animal: Animal): Animal is Fish {
  return 'swin' in Animal;
}

function isAnimal(arg: any): arg is Animal {
  return arg.name !== undefined;
  // return 'name' in arg; 라고 표현해도 동일합니다.
}
```

```ts
/**
 * 사용자 정의 Type Guard!
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}
```
