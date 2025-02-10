# nest advanced AsyncLocalStorage nestjs-cls transactional

## install

```sh
npm i nestjs-cls
npm i @nestjs-cls/transactional
npm i @nestjs-cls/transactional-adapter-prisma
```

## app.module.ts

```ts
import { ClsModule } from "nestjs-cls";
import { ClsPluginTransactional } from "@nestjs-cls/transactional";
import { TransactionalAdapterPrisma } from "@nestjs-cls/transactional-adapter-prisma";

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
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
import { InjectTransaction, Transaction, TransactionHost, Transactional } from "@nestjs-cls/transactional";
import { TransactionalAdapterPrisma } from "@nestjs-cls/transactional-adapter-prisma";

@Injectable()
class UserService {
  constructor(
    private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,
    // InjectTransaction 데코레이터 사용 시 tx를 바로 주입받을 수 있음
    @InjectTransaction()
    private readonly tx: Transaction<TransactionalAdapterPrisma>,
  ) {}

  // Transactional 데코레이터 사용 시
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

  // withTransaction 사용 시
  async createPostOfUsername(username: string, data: CreatePostDto) {
    return this.txHost.withTransaction(async tx => {
      const foundUser = await tx.user.findUniqueOrThrow({ where: { username } });
      const createdPost = await tx.user.create({
        data: {
          ...data,
          user: { connect: { id: foundUser.id } },
        },
      });
      return createdPost;
    });
  }
}
```
