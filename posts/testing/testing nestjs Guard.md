# testing nestjs guard

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { of } from "rxjs";
import { ExampleGuard } from "./example.guard";

describe("ExampleGuard", () => {
  let guard: ExampleGuard;
  let context: ExecutionContext;

  beforeEach(() => {
    guard = new ExampleGuard();
    context = createMock<ExecutionContext>();
  });

  it("should be defined", () => {
    expect(interceptor).toBeDefined();
  });

  describe("canActivate", () => {
    it("should return false", async () => {
      const user = {
        clientId: "example",
        roles: ["USER"],
      };

      const data = {
        clientId: "example2",
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
