# pipe

> input data(param, query, body)를 변환하거나 검증하는 코드를 분리할 수 있다.
>
> > input data는 항상 string으로 온다! 파이프에서 값을 변환해줄 수 있다.
> >
> > > 이를 더 쉽게하기 위해 class-transformer, class-validator를 사용한다. (또는 zod)

## built-in pipes

```ts
ValidationPipe;
ParseIntPipe;
ParseFloatPipe;
ParseBoolPipe;
ParseArrayPipe;
ParseUUIDPipe;
ParseEnumPipe;
DefaultValuePipe;
ParseFilePipe;

// 사용
@Param('id', ParseIntPipe)
```
