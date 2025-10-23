# typescript error

## throw는 항상 Error를 던져라.

> js에서는 Error가 아닌 값도 던질 수 있다..

## stack trace를 잃지 않도록 해라

> cause를 통해서 original error를 전달하자.

## constant error를 만들어라

> new Error('blah blah')를 사용하지 말고, Error 클래스를 상속한 Custom Error 클래스를 만들어라.

```ts
type Jsonable = string | number | boolean | null | undefined | readonly Jsonable[] | { readonly [key: string]: Jsonable } | { toJSON(): Jsonable };

export class BaseError extends Error {
  public readonly context?: Jsonable;

  constructor(message: string, options: { error?: Error; context?: Jsonable } = {}) {
    const { cause, context } = options;

    super(message, { cause });
    this.name = this.constructor.name;

    this.context = context;
  }
}
```

## 항상 올바른 context를 전달해라

```ts
try {
  await findById(user.id, options);
} catch (err) {
  const error = ensureError(err);

  throw new NotFoundException("User Not Found", {
    cause: error,
    context: { user, options },
  });
}
```

## 예측한 상황이 아닐 때만 Error를 던져라

> throw란 더 이상 로직을 진행할 수 없다는 것을 의미한다.
