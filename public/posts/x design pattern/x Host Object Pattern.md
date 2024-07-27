# Host Object Pattern

```ts
import { TransactionHost } from "@nestjs-cls/transactional";
import { TransactionalAdapterPrisma } from "@nestjs-cls/transactional-adapter-prisma";
// ... other imports

@Injectable()
class UserService {
  constructor(
    private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,
    private readonly accountService: AccountService,
  ) {}

  async createUser(name: string): Promise<User> {
    return this.txHost.withTransaction(async () => {
      const user = await this.txHost.tx.user.create({ data: { name } });
      await this.accountService.createAccountForUser(user.id);
      return user;
    });
  }
}
```
