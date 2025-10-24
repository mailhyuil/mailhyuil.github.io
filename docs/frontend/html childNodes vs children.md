# html childNodes vs children

> childNodes는 요소 외의 주석과 같은 것들도 포함함
>
> > children은 요소만
> >
> > > children을 사용하자
> > > children은 index로만 접근할 수 있음 배열 메소드 불가 Array.from()으로 배열로 변환 가능

```js
const children = this.parent.children;
const childArray = Array.from(children);
```
