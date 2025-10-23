# nestjs test

## test

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionModule } from "../subscription/subscription.module";
import { ProfileModule } from "../profile/profile.module";
import { PrismaModule } from "../../prisma/prisma.module";

describe("UserController", () => {
  // controller
  let userController: UserController;
  // service
  let userService: UserService;
  // module
  let authModule: AuthModule;
  let subscriptionModule: SubscriptionModule;
  let profileModule: ProfileModule;
  let prismaModule: PrismaModule;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [UserController],
      providers: [UserService],
    });
    overrideProvider(UserService).useClass(MockUserService);
    overrideProvider(AuthService).useClass(MockAuthService);
    overrideGuard(AuthGuard).useClass(MockAuthGuard).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);
    authModule = moduleRef.get<AuthModule>(AuthModule);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of users", async () => {
      const result = [
        { username: "sangbaek", password: "1234" },
        { username: "hyuil", password: "1234" },
      ];

      jest.spyOn(userService, "findAll").mockImplementation(() => result);

      expect(await userController.findAll()).toBe(result);
    });
  });
});
```
