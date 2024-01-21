# nest testing interceptor

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { of } from "rxjs";
import { ForbiddenResourceInterceptor } from "./forbidden-resource.interceptor";

describe("ForbiddenResourceInterceptor", () => {
  let interceptor: ForbiddenResourceInterceptor;
  let context: ExecutionContext;

  beforeEach(() => {
    interceptor = new ForbiddenResourceInterceptor();
    context = createMock<ExecutionContext>();
  });

  it("ForbiddenResourceInterceptor가 정의되어야 함.", () => {
    expect(interceptor).toBeDefined();
  });

  describe("intercept", () => {
    it("ForbiddenException을 던져야 함.", () => {
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

      const intercept$ = interceptor.intercept(context, {
        handle: () => {
          return of();
        },
      });

      intercept$.subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(ForbiddenException);
        },
      });
    });
  });
});
```
