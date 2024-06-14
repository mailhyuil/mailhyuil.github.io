# typescript typeguard

> type narrowing을 위한 방법
>
> > 인터페이스를 동적으로 선택하고싶을 때 사용

## typeof

> 변수의 타입을 좁히는데 사용

```ts
if (typeof x === "string") {
  // x는 string으로 추론됩니다.
  console.log(x.substr(1)); // OK
  console.log(x.substr(1)); // OK
} else {
  console.log(x.substr(1)); // Error, 'number'에 'substr' 프로퍼티가 없습니다.
}
```

## instanceof

> 클래스의 인스턴스를 좁히는데 사용
>
> > prototype을 검사

```ts
if (obj instanceof Foo) {
  // obj는 Foo로 추론됩니다.
  obj.foo();
  obj.bar(); // Error: 'bar'는 'Foo'에 존재하지 않습니다.
}
```

## in

> 프로퍼티의 존재를 검사

```ts
if ("swim" in pet) {
  // pet은 Fish로 추론됩니다.
  pet.swim();
}
```

## custom

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

function isFish(animal: Animal): Animal is Fish {
  return "swin" in Animal;
}

function isAnimal(arg: any): arg is Animal {
  return arg.name !== undefined;
  // return 'name' in arg; 라고 표현해도 동일합니다.
}
```

## Dto type guard

```ts
interface UserDto {
  id: string;
  username: string;
  realname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  blockedAt: Date;
  deletedAt: Date;
}

// 모든 키를 가지고 있는지 확인하는 방법
function isUserDto(arg: any): arg is UserDto {
  const keys: (keyof UserDto)[] = Object.keys(arg) as (keyof UserDto)[];
  return keys.every((key) => key in arg);
}

// flag만 하나 선택해서 확인하는 방법
function isUserDto(arg: any): arg is UserDto {
  return arg.type === "User";
}
```
