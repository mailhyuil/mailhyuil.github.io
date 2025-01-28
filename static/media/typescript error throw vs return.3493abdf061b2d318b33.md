# js error throw vs return

## throw (exception approach)

```ts
try {
  await task();
} catch (error) {
  if (error instanceof NotFoundException) {
    return res.status(404).json({
      errorMessage: error.message,
    });
  }
  // and then what?..

  // error는 any 타입으로 들어오기 때문에 처리하기가 애매하다.
  // typescript에서 error는 function signature에 포함되지 않기 때문에..
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

class UserNotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundException";
  }
}
// .. other Errors

type UserDto = { id: string; name: string };

const users: UserDto[] = [
  {
    id: "1234",
    name: "John",
  },
  {
    id: "5678",
    name: "Doe",
  },
];

const findById = (id: string): Result<UserNotFoundException, UserDto> => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return {
      success: false,
      error: new UserNotFoundException("User not found"),
    };
  }
  return {
    success: true,
    value: user,
  };
};

function main() {
  const result = findById("1234");

  if (!result.success) {
    if (result.error instanceof UserNotFoundException) {
      console.error("Http 404 Error: ", result.error.message);
      res.status(404).send({ message: result.error.message, context: { result } });
      return;
    }
    console.error("Http 500 Error: ", result);
    res.status(500).send({ message: "Internal Server Error", context: { result } });
    return;
  }

  console.log("Found User : ", result.value);
}

main();
```
