# typescript error Result Pattern neverthrow

## install

```sh
npm i neverthrow
npm i -D eslint-plugin-neverthrow
```

## 사용

```ts
import { err, ok, Result } from "neverthrow";

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class ConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
  }
}

class TooManyRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TooManyRequestError";
  }
}

function task(): Result<string, NotFoundError | ConflictError | TooManyRequestError> {
  const random = Math.floor(Math.random() * 10);
  if (random === 0) {
    return err(new ConflictError("You are trying to create a duplicate resource"));
  }
  if (random === 1) {
    return err(new NotFoundError("What you are looking for is not found"));
  }
  if (random === 2) {
    return err(new TooManyRequestError("You are sending too many requests"));
  }
  return ok<string>("Success!!");
}

function main() {
  const result = task();
  if (result.isErr()) {
    if (result.error instanceof ConflictError) {
      console.log("ConflictError 가 발생했습니다.");
    }
    if (result.error instanceof NotFoundError) {
      console.log("NotFoundError 가 발생했습니다.");
    }
    if (result.error instanceof TooManyRequestError) {
      console.log("TooManyRequestError 가 발생했습니다.");
    }
    return;
  }
  console.log(result.value);
}
main();
```
