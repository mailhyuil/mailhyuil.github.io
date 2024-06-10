# result pattern

```ts
type Result<Error, Value> =
  | {
      success: false;
      error: Error;
    }
  | {
      success: true;
      value: Value;
    };

class TypeMismatch extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TypeMismatch";
  }
}

const result: Result = await task();

if (!result.success) {
  // error에 type이 정의되어 있기 때문에 error를 처리하기가 쉽다.
  if (result.error instanceof NotFoundError) {
    return res.status(404).json({
      errorMessage: result.error.message,
    });
  }
  if (result.error instanceof TypeMismatch) {
    return res.status(400).json({
      errorMessage: result.error.message,
    });
  }
}

// otherwise continue handling the request
```
