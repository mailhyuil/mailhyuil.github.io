# nestjs config

> process.env를 사용하는 것보다 Type-safe, Remote Config, Validation 등의 기능을 제공
>
> > 간단한 설정값은 process.env로 사용해도 무방하다.
> >
> > 서비스/컨트롤러 등 비즈니스 로직에서 사용되는 갑승ㄴ ConfigService를 사용하자.

## install

```sh
npm i @nestjs/config
npm i dotenv
npm i -D dotenv-cli
```

## DatabaseModule

```ts
const envFilePath = path.join(__dirname, "../../../", `.env.${process.env.NODE_ENV}`);

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      // envFilePath: [".env.development.database", ".env.development.aws"],
      // ignoreEnvFile: true, // if you don't need to load .env file
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {
  constructor(private readonly configService: ConfigService) {}
}
```

## custom configuration files

### config/configuration.ts

```ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
```

### app.modules.ts

```ts
import configuration from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
```
