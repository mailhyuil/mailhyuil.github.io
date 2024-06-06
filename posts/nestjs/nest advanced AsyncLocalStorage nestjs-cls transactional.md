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
  constructor(private readonly userRepository: UserRepository) {}

  @Transactional()
  async runTransaction() {
    // both methods are executed in the same transaction
    const user = await this.userRepository.createUser("John");
    const foundUser = await this.userRepository.getUserById(r1.id);
    assert(foundUser.id === user.id);
  }
}
```

## repository

```ts
@Injectable()
class UserRepository {
  constructor(private readonly txHost: TransactionHost<TransactionalAdapterPrisma>) {}

  async getUserById(id: number) {
    // txHost.tx is typed as the transactional PrismaClient
    return this.txHost.tx.user.findUnique({ where: { id } });
  }

  async createUser(name: string) {
    return this.txHost.tx.user.create({
      data: { name: name, email: `${name}@email.com` },
    });
  }
}
```
