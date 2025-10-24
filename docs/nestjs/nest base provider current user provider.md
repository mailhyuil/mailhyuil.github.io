# nest base provider current user provider

## module

```ts
import { Module, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

export const CURRENT_USER = Symbol("CURRENT_USER");

@Module({
  providers: [
    {
      provider: CURRENT_USER,
      inject: [REQUEST],
      useFactory: (req: Request) => {
        return req.user;
      },
      scope: Scope.REQUEST,
    },
  ],
  exports: [CURRENT_USER],
})
export class CurrentUserModule {}
```

## service

```ts
import { Inject, Injectable } from "@nestjs/common";
import { CURRENT_USER } from "./current-user.module";

@Injectable()
export class ServiceThatNeedsUser {
  constructor(@Inject(CURRENT_USER) private readonly user: User) {}
}
```
