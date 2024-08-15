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
