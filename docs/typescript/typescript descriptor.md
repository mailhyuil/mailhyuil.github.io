# typescript descriptor

> "프로퍼티"는 키와 값의 쌍이라고 생각할 수 있지만 사실 그 보다 더 유연한 기능을 가진 자료구조입니다.

## 프로퍼티 플래그

> 프로퍼티는 "값"과 함께 플래그(flag)라고 불리는 세개의 숨겨진 속성을 가지고 있습니다.

```txt
// default는 모두 true

writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다. false 시 Object.keys(user) 사용불가
configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
```

## 플래그 조회

```ts
// get flags
const descriptor = Object.getOwnPropertyDescriptor(obj, prop1);
const descriptors = Object.getOwnPropertyDescriptors(obj);

// set flags
Object.defineProperty(obj, prop1, descriptor);
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2,
  // ...
});
```

## 플래그 변경 메소드

```sh
# 객체에 새로운 프로퍼티를 추가할 수 없게 합니다.
Object.preventExtensions(obj)
# 새로운 프로퍼티 추가나 기존 프로퍼티 삭제를 막아줍니다. 프로퍼티 전체에 configurable: false를 설정하는 것과 동일한 효과입니다.
Object.seal(obj)
# 새로운 프로퍼티 추가나 기존 프로퍼티 삭제, 수정을 막아줍니다. 프로퍼티 전체에 configurable: false, writable: false를 설정하는 것과 동일한 효과입니다.
Object.freeze(obj)

## 아래 메서드는 위 세 가지 메서드를 사용해서 설정한 제약사항을 확인할 때 사용할 수 있습니다. ##

# 새로운 프로퍼티를 추가하는 게 불가능한 경우 false를, 그렇지 않은 경우 true를 반환합니다.
Object.isExtensible(obj)
# 프로퍼티 추가, 삭제가 불가능하고 모든 프로퍼티가 configurable: false이면 true를 반환합니다.
Object.isSealed(obj)
# 프로퍼티 추가, 삭제, 변경이 불가능하고 모든 프로퍼티가 configurable: false, writable: false이면 true를 반환합니다.
Object.isFrozen(obj)
```
