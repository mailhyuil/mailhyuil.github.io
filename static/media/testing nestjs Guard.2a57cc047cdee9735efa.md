# testing nestjs guard

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { of } from "rxjs";
import { TestGuard } from "./test.guard";

describe("TestGuard", () => {
  let guard: TestGuard;
  let context: ExecutionContext;

  beforeEach(() => {
    guard = new TestGuard();
    context = createMock<ExecutionContext>();
  });

  it("should be defined", () => {
    expect(interceptor).toBeDefined();
  });

  describe("canActivate", () => {
    it("should return false", async () => {
      const user = {
        clientId: "test",
        roles: ["USER"],
      };

      const data = {
        clientId: "test2",
      };

      /// req 모킹
      (context.switchToHttp().getRequest as jest.Mock<any, any>).mockRejectedValueOnce({
        user: user,
      });
      /// res 모킹
      (context.switchToHttp().getResponse as jest.Mock<any, any>).mockReturnValueOnce({
        body: { data },
      });

      const res = await guard.canActivate(context);

      expect(res).toBe(false);
    });
  });
});
```
