# lodash base 사용 이유

> 성능면에 있어서는 native method가 더 빠르다
>
> > 그러나 함수의 확장성과 유연성을 고려하면 lodash를 사용하는 것이 좋다
> >
> > > 특정 메소드는 lodash가 더 빠르다 (e.g. \_.uniq, 지연평가 함수 등..)
> > >
> > > > 고차함수에게 함수 대신 객체도 전달할 수 있다.

```js
_.function(thisArg, "property");
```
