# testing nestjs middleware

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { of } from "rxjs";
import { ExampleMiddleware } from "./example.middleware";

describe("ExampleMiddleware", () => {
  let middleware: ExampleMiddleware;
  let context: ExecutionContext;

  beforeEach(() => {
    middleware = new ExampleMiddleware();
    context = createMock<ExecutionContext>();
  });

  it("should be defined", () => {
    expect(interceptor).toBeDefined();
  });

  describe("use", () => {
    it("should call next()", async () => {
      /// req 모킹
      const req = (context.switchToHttp().getRequest as jest.Mock<any, any>).mockRejectedValueOnce({
        user: user,
      });
      /// res 모킹
      const res = (context.switchToHttp().getResponse as jest.Mock<any, any>).mockReturnValueOnce({
        body: { data },
      });
      const next = jest.fn();

      middleware.use(req, res, next);

      expect(next).toBeCalled();
    });
  });
});
```
