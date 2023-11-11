# deletedAt, blockedAt

> 물리 삭제 (hard delete) : 삭제시 DB에서 삭제
>
> > 논리 삭제 (soft delete) : 유저 삭제시 deletedAt 업데이트 시키고 며칠 지나면 삭제

## Prisma

```prisma
model User {
    id        Int      @id @default(autoincrement())
    email     String   @unique
    name      String?
    password  String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    deletedAt DateTime?
    blockedAt DateTime?
}
```

## NestJS

```typescript
@Injectable()
export class UserService {
  delete(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
  block(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { blockedAt: new Date() },
    });
  }
}
```

## cronJob

```ts
import { Cron, CronExpression } from "@nestjs/schedule";
@Injectable()
export class TasksService {
  constructor(private userService: UserService) {}
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron() {
    await this.userService.deleteAllDeletedUser();
  }
}
```
