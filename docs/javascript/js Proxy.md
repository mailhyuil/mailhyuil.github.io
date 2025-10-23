# js AOP Proxy

> target을 handler에 있는 trap을 이용하여 가공한다.
>
> > receiver로 this binding을 조작할 수 있다.
>
> > Proxy는 Reflect와 다르게 target을 직접 wrapping 한다.
> >
> > 단지 target을 가공하는 역할만 한다.
> >
> > > 반면 Reflect는 target의 메소드를 호출를 호출하면서 가공한다.

## 생성

```js
const proxy = new Proxy(target, handler);
```

## usage

> target의 proxy를 생성하고 target 대신 proxy를 사용하면
> proxy에 한 행위가 전부 target에 반영된다.
>
> > handler에 트랩 메소드를 정의하면 특정 행위에 대해 가공을 할 수 있다

```ts
let target = {};
let proxy = new Proxy(target, {}); // 빈 핸들러

proxy.test = 5; // 프락시에 값을 씁니다. -- (1)
alert(target.test); // 5, target에 새로운 프로퍼티가 생겼네요!

alert(proxy.test); // 5, 프락시를 사용해 값을 읽을 수도 있습니다. -- (2)

for (let key in proxy) alert(key); // test, 반복도 잘 동작합니다. -- (3)
```

## 핸들러 사용

> 핸들러에 프록시 트랩 메소드를 구현

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 기본값
    }
  },
});

alert(numbers[1]); // 1
alert(numbers[123]); // 0 (해당하는 요소가 배열에 없으므로 0이 반환됨)
```

## 트랩 메소드

```sh
get	# 프로퍼티를 읽을 때
set	# 프로퍼티에 쓸 때
has	# in 연산자가 동작할 때
deleteProperty	# delete 연산자가 동작할 때
apply	# 함수를 호출할 때
construct	# new 연산자가 동작할 때
getPrototypeOf	# Object.getPrototypeOf
setPrototypeOf	# Object.setPrototypeOf
isExtensible	# Object.isExtensible
preventExtensions	# Object.preventExtensions
defineProperty	# Object.defineProperty, Object.defineProperties
getOwnPropertyDescriptor	# Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
ownKeys	# Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries
```

## 폐기 가능한 프록시

> 생성자로 만들어진 프록시 객체는 지워지거나(garbage collection) 재사용이 불가능하다.
>
> > revocable() 메소드를 사용하면 폐기 가능한 프록시를 생성할 수 있다.

```js
Proxy.revocable(); // 메소드를 사용하면 폐기 가능한 프록시를 생성할 수 있다.
```
