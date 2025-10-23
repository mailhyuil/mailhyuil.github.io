# nest prisma Generic Service

## abstract

```ts
import { Injectable } from "@nestjs/common";
import { CrudTypeMap } from "./crud.type";
import { Delegate } from "./delegate";

@Injectable()
export abstract class CrudService<D extends Delegate, T extends CrudTypeMap> {
  constructor(protected delegate: D) {}

  public getDelegate(): D {
    return this.delegate;
  }

  public async aggregate(data: T["aggregate"]) {
    const result = await this.delegate.aggregate(data);
    return result;
  }

  public async count(data: T["count"]) {
    const result = await this.delegate.count(data);
    return result;
  }

  public async findAll(data: T["findMany"]) {
    const result = await this.delegate.findMany(data);
    return result;
  }

  public async findById(data: T["findUnique"]) {
    const result = await this.delegate.findUnique(data);
    return result;
  }

  public async create(data: T["create"]) {
    const result = await this.delegate.create(data);
    return result;
  }

  public async update(data: T["update"]) {
    const result = await this.delegate.update(data);
    return result;
  }

  public async delete(data: T["delete"]) {
    const result = await this.delegate.delete(data);
    return result;
  }
}
```

## delegate.ts

```ts
export interface Delegate {
  aggregate(data: unknown): unknown;
  count(data: unknown): unknown;
  create(data: unknown): unknown;
  delete(data: unknown): unknown;
  deleteMany(data: unknown): unknown;
  findFirst(data: unknown): unknown;
  findMany(data: unknown): unknown;
  findUnique(data: unknown): unknown;
  update(data: unknown): unknown;
  updateMany(data: unknown): unknown;
  upsert(data: unknown): unknown;
}
```

## crud.type.ts

```ts
export interface CrudTypeMap {
  aggregate: unknown;
  count: unknown;
  create: unknown;
  delete: unknown;
  deleteMany: unknown;
  findFirst: unknown;
  findMany: unknown;
  findUnique: unknown;
  update: unknown;
  updateMany: unknown;
  upsert: unknown;
}
```

## user.type.ts

```ts
import { Prisma } from "@prisma/client";
import { CrudTypeMap } from "./crud.type";

export class UserTypeMap implements CrudTypeMap {
  aggregate: Prisma.UserAggregateArgs;
  count: Prisma.UserCountArgs;
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  deleteMany: Prisma.UserDeleteManyArgs;
  findFirst: Prisma.UserFindFirstArgs;
  findMany: Prisma.UserFindManyArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;
  updateMany: Prisma.UserUpdateManyArgs;
  upsert: Prisma.UserUpsertArgs;
}
```

## service

```ts
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CrudService } from "../../crud/crud.service";
import { UserTypeMap } from "../../crud/user.type";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class UserService extends CrudService<Prisma.UserDelegate, UserTypeMap> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }
}
```
