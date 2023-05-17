# nestjs config

> ConfigService, ConfigModule 사용
>
> > .env 읽어서 설정

## install

```
npm i @nestjs/config
npm i dotenv
npm i dotenv-cli
```

## EnvironmentModule

> ConfigService, ConfigModule 사용
>
> > envFilePath는 dist 폴더의 밖!!! (루트패스)

```ts
const envFilePath = path.join(__dirname, "../../../", `.env.${process.env.NODE_ENV}`);

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
  ],
  providers: [EnvironmentService],
})
export class EnvironmentModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const envFile = readFileSync(envFilePath, {});
    if (!envFile) {
      throw new Error("ENV FILE NOT FOUND!");
    }
  }
}
```

## AppModule

```ts
imports: [
  EnvironmentModule,
],
```

## main.ts

```ts
const configService = app.get<ConfigService>(ConfigService);
const port = configService.get<number>("SERVER_PORT");
```

## .env 파일

> root 에 위치
>
> > nest가 dist밖의 패스(루트)를 읽게 해서 실행시킨다

```
"dev": "dotenv -e .env -- nest start --watch",
```
