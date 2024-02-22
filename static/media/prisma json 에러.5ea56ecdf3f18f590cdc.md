# prisma json 'NullableJsonNullValueInput | InputJsonValue' 에러

> json 데이터를 as any로 형변환
>
> > 또는 instanceToPlain 사용

```ts
this.prisma.some.create({
  data: {
    json: json as any,
  },
});
```
