# prisma error json

> 타입이 json이 아닌 dto class라서 발생하는 에러
>
> > 데이터를 as object로 컴파일러에게 알려주기

```ts
this.prisma.some.create({
  data: {
    json: json as object,
  },
});
```
