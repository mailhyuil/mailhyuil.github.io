# 매핑타입 & 조건타입

## Readonly<T>

> 읽기전용으로 만들어주는 매핑타입

```
(person:Readonly<Person>)=>{}
```

## Partial<T>

> 프로퍼티를 선택사항으로 바꿔준다

## Required<T>

> 프로퍼티를 필수사항으로 바꿔준다

## Awaited<T>

## Record<K, T>

## Pick<T, K>

## Omit<T, K>

## Exclude<T>

> 프로퍼티를 제외시켜준다

```
Exclude<keyof T,K>
```

## Extract<T, Union>

## NonNullable<T>

## Parameters<T>

## ConstructorParameters<T>

## ReturnType<T>

## InstanceType<T>

## ThisParameterType<T>

## OmitThisParameter<T>

## ThisType<T>
