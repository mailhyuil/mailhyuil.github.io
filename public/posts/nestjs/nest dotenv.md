# nest dotenv

> .gitignore 에 .env 반드시 넣어주기!

## install

```sh
npm i dotenv
npm i dotenv-cli
```

## 파일 생성

> .env.development / .env.stage / .env.production

```sh
NODE_ENV=development

SERVER_PORT=4200

DATABASE_URL="postgresql://postgres:password@59.3.87.92:5432/avirtual?schema=public"

JWT_SECRET_KEY=5BTENutJCTpGO2aHfDDs2u0KKKKpKV8s
JWT_PUBLIC_KEY=Xv26XN6L86kGOvHMS2rfV2k9HsLVEEEp
JWT_PRIVATE_KEY=PAwXjs5j7eLj8WIeczIRgZN2TdJqi2Bn
```

## .env 파일 읽기

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

## 환경변수 가져오기

```sh
process.env.NODE_ENV
```

## dotenv-cli

```sh
dotenv -e .env.development -- nest start --watch
```
