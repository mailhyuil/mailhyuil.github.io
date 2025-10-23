# MappedType

## Readonly\<T>

> 읽기전용으로 만들어주는 매핑타입

## Partial\<T>

> 프로퍼티를 선택사항으로 바꿔준다

## Required\<T>

> 프로퍼티를 필수사항으로 바꿔준다

## Record\<K, T>

> object에 타입 지정

## Pick\<T, K>

> K의 값만 추출

## Omit\<T, K>

> K의 값을 누락시키기

## Exclude\<T>

> 프로퍼티를 제외시켜준다

```ts
Exclude\<keyof T, K>;
```

## Extract\<T, Union>

## NonNullable\<T>

## Parameters\<T>

## ConstructorParameters\<T>

> 생성자의 파라미터 타입을 추출

## ReturnType\<T>

> 함수의 반환값을 추출

## InstanceType\<T>

> 클래스의 인스턴스 타입을 추출

## ThisType\<T>

> this의 타입을 지정

## ThisParameterType\<T>

> 함수의 this 파라미터의 타입을 추출

## OmitThisParameter\<T>

> 함수의 this 파라미터를 제거
