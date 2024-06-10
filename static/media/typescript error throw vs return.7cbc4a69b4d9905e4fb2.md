# js error throw vs return

## throw (exception approach)

```ts
try {
  await task();
} catch (error) {
  // error는 any 타입으로 들어오기 때문에 처리하기가 애매하다.
  // typescript에서 error는 function signature에 포함되지 않기 때문에..
  if (error instanceof NotFoundError) {
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
}
```

## return (computational approach)

> error의 type을 명시적으로 정의하여 반환하는 방식

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
