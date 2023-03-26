# nest DI

## repository interface

```
export interface UserRepository {
  findById(id: number): User | null;
}
```

## repository Impl

```
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

```
@Module({
  imports: [],
  controllers: [],
  providers: [
    UserService,
    // provide: interface, useClass: DI 하려는 interface 구현체
    { provide: 'UserRepository', useClass: UserRepositoryImpl }
  ],
})
export class UserModule {}
```

## Service

```
@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository
  ) {}

  getUser(id: number): User {
    return this.userRepository.findById(id);
  }
}
```
