# testing nestjs golvelup

> nestjs의 테스트를 쉽게 만들어 주는 라이브러리
>
> > executionContext를 mocking 할 수 있어서 interceptor, guard, filter 의 테스트를 쉽게 만들어 줌

## install

```sh
npm i -D @golevelup/ts-jest
```

## usage

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext } from "@nestjs/common";

describe("Mocked Execution Context", () => {
  it("should have a fully mocked Execution Context", () => {
    const context = createMock<ExecutionContext>();

    /// req 모킹
    (context.switchToHttp().getRequest as jest.Mock<any, any>).mockRejectedValueOnce({
      user: user,
    });
    /// res 모킹
    (context.switchToHttp().getResponse as jest.Mock<any, any>).mockReturnValueOnce({
      body: { data },
    });

    expect(context.switchToHttp()).toBeDefined();
  });
});
```

```ts
const context = createMock<ExecutionContext>({
  switchToHttp: () => ({
    getRequest: () => ({
      headers: {
        authorization: "auth",
      },
    }),
  }),
});
```

## golveup 사용 안할 시

```ts
const context: any = {
  switchToHttp: () => ({
    getRequest: () => ({
      url: "mock-url",
    }),
    getResponse: () => {
      const response = {
        code: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      return response;
    },
  }),
};
```
