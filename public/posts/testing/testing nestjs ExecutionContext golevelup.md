# testing nestjs golvelup

> nestjs의 테스트를 쉽게 만들어 주는 라이브러리
>
> > executionContext를 mocking 할 수 있어서 interceptor, guard, filter 의 테스트를 쉽게 만들어 줌

## install

```sh
npm i -D @golevelup/ts-jest
```

## 사용

```ts
import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext } from "@nestjs/common";

describe("Mocked Execution Context", () => {
  it("should have a fully mocked Execution Context", () => {
    const mockExecutionContext = createMock<ExecutionContext>();
    expect(mockExecutionContext.switchToHttp()).toBeDefined();
  });
});
```
