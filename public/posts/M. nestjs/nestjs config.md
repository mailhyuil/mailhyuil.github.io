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

## main.ts

```
const configService = app.get<ConfigService>(ConfigService);
const port = configService.get<number>('SERVER_PORT');
```
