# RestApi shallow entities & partial entities

> entity가 가지고 있는 field 중 id만 혹은 일부만을 리턴하는 것
>
> > client는 id를 가지고 추가적인 request를 보낸다
> >
> > > /users endpoint로 요청시 모든 field를 리턴
> > >
> > > /users가 아닌 다른 endpoint로 요청시 일부 field(shallow user)만 리턴

```js
User: {
    "id": 1,
}
```
