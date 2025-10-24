# testing nestjs ExecptionFilter

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { of } from "rxjs";
import { ExampleExceptionFilter } from "./example.exception.filter";

describe("ExampleExceptionFilter", () => {
  let exceptionFilter: AllExceptionFilter;
  let context: ExecutionContext;
  let logger = { error: jest.fn() };

  beforeEach(() => {
    exceptionFilter = new ExampleExceptionFilter(logger);
    context = createMock<ExecutionContext>();
  });

  it("should be defined", () => {
    expect(interceptor).toBeDefined();
  });

  describe("catch", () => {
    it("should catch and log the error", async () => {
      const BadRequestException: BadRequestException = new BadRequestException();

      /// req 모킹
      (context.switchToHttp().getRequest as jest.Mock<any, any>).mockRejectedValueOnce({
        user: user,
      });
      /// res 모킹
      (context.switchToHttp().getResponse as jest.Mock<any, any>).mockReturnValueOnce({
        body: { data },
      });

      exceptionFilter.catch(BadRequestException, context);
      expect(logger.error).toBeCalled();
      expect(context.switchToHttp().getResponse().code().send).toBeCalled();
    });
  });
});
```
