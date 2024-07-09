# nest advanced AsyncLocalStorage nestjs-cls transactional

## install

```sh
npm i @nestjs-cls/transactional
```

## app.module.ts

```ts
@Module({
  imports: [
    ClsModule.forRoot({
      plugins: [
        new ClsPluginTransactional({
          imports: [
            PrismaModule, // module in which the PrismaClient is provided
          ],
          adapter: new TransactionalAdapterPrisma({
            prismaInjectionToken: PrismaService, // the injection token of the PrismaClient
          }),
        }),
      ],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
```

## service

```ts
@Injectable()
class UserService {
  constructor(private readonly txHost: TransactionHost<TransactionalAdapterPrisma>) {}

  @Transactional()
  async createPostOfUsername(username: string, data: CreatePostDto) {
    // both methods are executed in the same transaction
    const foundUser = await this.txHost.tx.user.findUniqueOrThrow({ where: { username } });
    const createdPost = await this.txHost.tx.user.create({
      data: {
        ...data,
        user: { connect: { id: foundUser.id } },
      },
    });
    return createdPost;
  }
}
```
