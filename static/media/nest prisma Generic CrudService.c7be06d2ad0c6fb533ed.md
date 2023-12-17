# nest prisma Generic Service

## abstract

```ts
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export abstract class CrudService<E, M extends Delegate, C, R, U, D> {
  constructor(protected modelDelegate: m) {}

  findAll(): Promise<R[]> {
    return this.modelDelegate.findMany(params);
  }

  findById(id: number): Promise<R> {
    return this.modelDelegate.findUnique({ where: { id } });
  }

  create(data: C): Promise<R> {
    return this.modelDelegate.create(data);
  }

  update(id: number, data: U): Promise<R> {
    return this.modelDelegate.update({ where: { id }, data });
  }

  delete(id: number): Promise<D> {
    return this.modelDelegate.delete({ where: { id } });
  }
}
```

## service

```ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CrudService } from "./crud.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserService extends CrudService<
  Prisma.UserDelegate,
  Prisma.UserCreateInput
  // ... basically a LOT of types
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }
}
```
