# javscript descriptor

> 프로퍼티 플래그를 담고있는 설명자
>
> > 객체를 수정할 수 있는지..의 설정을 할 수 있다

```js
Object.getOwnPropertyDescriptor(this, "propertyName");

// value
// writable // true면 수정 불가
// enumable // false면 열거 불가 (for in 불가)
// configurable // false면 삭제 불가
```
