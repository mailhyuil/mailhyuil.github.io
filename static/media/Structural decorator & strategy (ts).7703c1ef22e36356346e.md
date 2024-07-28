# decorator & strategy (ts)

```ts
interface User {
  name: string;
}

interface Repository<T> {
  findByName(name: string): T;
  withRetryPolicy(policy: RetryPolicy): this;
}

interface RetryPolicy {
  execute<T>(repository: T): T;
}

class AddUserWhenUserMissing implements RetryPolicy {
  execute<UserRepository>(repository: UserRepository): UserRepository {
    if (!repository || typeof repository !== "object") return repository;
    // 모든 property를 가져온다.
    const propertyNames = Object.getOwnPropertyNames(repository.constructor.prototype);
    // 모든 descriptor를 가져온다.
    const descriptors = Object.getOwnPropertyDescriptors(repository.constructor.prototype);
    propertyNames.forEach((propertyName) => {
      const descriptor = descriptors[propertyName];
      // 함수가 아니면 무시
      if (typeof descriptor.value !== "function") return;
      // 함수이름이 constructor이면 무시
      if (propertyName === "constructor") return;
      // 함수이름이 withRetryPolicy이면 무시
      if (propertyName === "withRetryPolicy") return;
      if (descriptor.value) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
          let result;
          try {
            result = await originalMethod.apply(repository, args);
          } catch (error) {
            if (error instanceof UserNotFoundError) {
              console.log(`User not found. Adding user ${args[0]} to the system.`);
              users.push({ name: args[0] satisfies string });
              result = await originalMethod.apply(repository, args);
            } else {
              throw error;
            }
          }
          return result;
        };
        Object.defineProperty(repository, propertyName, descriptor);
      }
    });
    return repository;
  }
}

class RetryThreeTimes implements RetryPolicy {
  execute<UserRepository>(repository: UserRepository): UserRepository {
    if (!repository || typeof repository !== "object") return repository;
    const descriptors = Object.getOwnPropertyDescriptors(repository.constructor.prototype);
    const propertyNames = Object.getOwnPropertyNames(repository.constructor.prototype);
    propertyNames.forEach((propertyName) => {
      const descriptor = descriptors[propertyName];
      if (typeof descriptor.value !== "function") return;
      if (propertyName === "constructor") return;
      if (propertyName === "withRetryPolicy") return;
      if (descriptor.value) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
          let attempt = 0;
          let result;
          while (attempt < 3) {
            try {
              result = await originalMethod.apply(repository, args);
              break;
            } catch (error) {
              if (error instanceof UserNotFoundError) {
                console.log("retrying attempt: ", attempt + 1);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                attempt++;
              } else {
                throw error;
              }
            }
          }
          return result;
        };
        Object.defineProperty(repository, propertyName, descriptor);
      }
    });
    return repository;
  }
}

class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}
class UserAlreadyExistError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserAlreadyExistError";
  }
}

const users: User[] = [];
class UserRepository implements Repository<User> {
  findByName(name: string): User {
    const found = users.find((user) => user.name === name);
    if (!found) throw new UserNotFoundError(`User with name ${name} not found.`);
    return found;
  }
  create(name: string) {
    const found = users.find((user) => user.name === name);
    if (!found) throw new UserAlreadyExistError(`User with name ${name} not found.`);
    users.push({ name });
    return { name };
  }
  withRetryPolicy(policy: RetryPolicy) {
    return policy.execute(this);
  }
}

async function main() {
  const userRepository = new UserRepository();
  const user: User = await userRepository.withRetryPolicy(new AddUserWhenUserMissing()).findByName("Hyuil");
  console.log("found User : ", user);
}

main();
```
