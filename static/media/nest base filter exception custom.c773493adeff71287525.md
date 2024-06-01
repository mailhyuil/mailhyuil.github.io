# nest base error

> nest는 HttpError를 정의하는 HttpException을 제공한다.

## custom

```ts
export class CustomException extends HttpException {
  constructor(errorCode: number) {
    super("CustomException이 발생했습니다.", 999);
  }
}
```
