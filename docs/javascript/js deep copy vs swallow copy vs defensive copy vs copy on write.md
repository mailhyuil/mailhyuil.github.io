# js deep copy vs swallow copy vs defensive copy vs copy on write

## swallow copy

> 1차 레벨 속성만 복사하는 것

```js
const obj = { a: 1, b: 2, c: 3 };
const copy = { ...obj };
```

## deep copy

> 모든 레퍼런스 속성도 새로 복사하는 것

```js
const obj = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(obj));
//or
const copy = structuredClone(obj);
```

## defensive copy (방어적 복사)

> mutable 객체의 값이 변경되는 것을 막기 위해서 복사하는 기법
>
> 이런 행위를 부르는 용어
>
> > 얕은 복사, 깊은 복사 둘 다 해당할 수 있다.
> >
> > > 방어적 복사는 메모리를 차지하게 하고 재할당 하면서 메모리 누수를 발생시킬 위험이 있기 때문에
> > >
> > > 애초에 immutable 객체를 사용하므로써 해결할 수 있다.

## copy on write (CoW)

> 복사할 때 사용하는 최적화 전략
>
> > 원본 데이터를 여러 곳에서 읽기 전용으로 공유하다가, 어느 한 곳에서 데이터를 변경하려 할 때만 복사를 수행하는 것
> >
> > > 불필요한 메모리 복사를 줄이고, 실제로 데이터가 수정될 때만 복사가 이루어지게 합니다.
