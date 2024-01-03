# nest testing interceptor

## install

```sh
npm i @golevelup/ts-jest
```

## test

```js
import { createMock } from '@golevelup/ts-jest';
import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { of } from 'rxjs';
import { ForbiddenResourceInterceptor } from './forbidden-resource.interceptor';

describe('ForbiddenResourceInterceptor', () => {
  let interceptor: ForbiddenResourceInterceptor;
  let context: ExecutionContext;

  beforeEach(() => {
    interceptor = new ForbiddenResourceInterceptor();
    context = createMock<ExecutionContext>();
  });

  it('ForbiddenResourceInterceptor가 정의되어야 함.', () => {
    expect(interceptor).toBeDefined();
  });

  describe('intercept', () => {
    it('ForbiddenException을 던져야 함.', () => {
      const userMock = {
        clientId: 'test',
        roles: ['USER'],
      };
      const dataMock = {
        clientId: 'test2',
      };
      (
        context.switchToHttp().getRequest as jest.Mock<any, any>
      ).mockRejectedValueOnce({
        user: userMock,
      });
      (
        context.switchToHttp().getResponse as jest.Mock<any, any>
      ).mockReturnValueOnce({
        body: { dataMock },
      });
      const obs = interceptor.intercept(context, {
        handle: () => {
          return of();
        },
      });
      obs.subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(ForbiddenException);
        },
      });
    });
  });
});

```
