# nest validate

> param이나 querystring으로 오는 건 무조건 string으로 온다

## global pipe로 사용

> transform:true로 설정하면 명시한 type으로 변환

```ts
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  })
);
```

## 데코레이터로 사용

```ts
@UsePipes(new ValidationPipe({ transform: true }))
```

## explicit conversion

> ParseIntPipe 등으로 사용해서 형변환

```ts
@Get(':id')
findOne(@Param('id') id: number) {
  console.log(typeof id === 'number'); // true
  return 'This action returns a user';
}
```
