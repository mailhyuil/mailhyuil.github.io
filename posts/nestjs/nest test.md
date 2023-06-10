# nestjs test

## controller

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionModule } from "../subscription/subscription.module";
import { ProfileModule } from "../profile/profile.module";
import { PrismaModule } from "../../prisma/prisma.module";
describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, SubscriptionModule, ProfileModule, PrismaModule],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
```

## service

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionModule } from "../subscription/subscription.module";
import { ProfileModule } from "../profile/profile.module";
import { PrismaModule } from "../../prisma/prisma.module";
describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, SubscriptionModule, ProfileModule, PrismaModule],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
```
