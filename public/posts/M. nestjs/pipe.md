# pipe

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
