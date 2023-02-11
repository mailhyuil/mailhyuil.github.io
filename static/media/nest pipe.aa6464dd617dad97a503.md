# pipe

> 요청 객체를 변환할 수 있는 기회를 제공

## 인수 변환 파이프

```
@Param('id', ParseIntPipe)
@Param('id', ParseBoolPipe)
@Param('id', ParseArrayPipe)
@Param('id', ParseUUIDPipe)
@Query('offset', new DefaultValuePipe(0))
```

---

## validation pipe

### validation 모듈 설치

```shell
npm i class-validator class-transformer
```

### main.ts

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhiteListed: true,
      transform: true,
    })
  ); // pipe 설정
  await app.listen(3000);
}
bootstrap();
```

### DTO

```ts
export class CreateMovieDto {
  @isString()
  readonly title: string;
  @isNumber()
  readonly year: number;
  @isString({ each: true })
  readonly genres: string[];
}
```
