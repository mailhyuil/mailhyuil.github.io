# nestjs config

> ConfigService, ConfigModule 사용
>
> > .env 읽어서 설정

## install

```
npm i --save @nestjs/config
```

## EnvironmentModule

> ConfigService, ConfigModule 사용

```ts
const envFilePath = path.join(
  __dirname,
  "../../../",
  `.env.${process.env.NODE_ENV}`
);

ConfigModule.forRoot({
  envFilePath,
}); // 전역에서 사용
```

## OnModuleInit

> 모듈 주입시 실행
>
> > env 파일 잘 읽었는지 확인
> >
> > > The onModuleInit() method runs only after all modules it depends upon have been initialized, so this technique is safe.

```ts
onModuleInit() {
  const envFile = readFileSync(envFilePath, {});
  if (!envFile) {
    throw new Error('ENV FILE NOT FOUND!');
  }
```

```ts
ConfigService;

this.configService.get<string>("TEST");
```
