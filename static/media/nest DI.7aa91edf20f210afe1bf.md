# nest DI

## repository interface

```ts
export interface UserRepository {
  findById(id: number): User | null;
}
```

## repository Impl

```ts
@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly users: { [userId: string]: User } = {};

  findById(id: number): User | null {
    const user = this.users[id];
    return !!user ? user : null;
  }
}
```

## Module

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [
    UserService,
    // provide: interface, useClass: DI 하려는 interface 구현체
    { provide: "UserRepositoryImpl", useClass: UserRepositoryImpl },
  ],
})
export class UserModule {}
```

## Service

```ts
@Injectable()
export class UserService {
  constructor(@Inject("UserRepositoryImpl") private readonly userRepository: UserRepository) {}

  getUser(id: number): User {
    return this.userRepository.findById(id);
  }
}
```
