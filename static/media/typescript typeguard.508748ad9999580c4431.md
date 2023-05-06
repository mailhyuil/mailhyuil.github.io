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
 * 매개변수의 타입은 any // 무엇이든지 받아도
 * "arg" is Foo
 * 이 가드를 통과하면 arg를 Foo로 다룰 수 있다.
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}
```
