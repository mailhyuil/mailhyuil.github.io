# nest cache wrap

> 데이터를 반환하는 함수를 캐싱하는 방법

```ts
export class UserController {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache, private readonly userService: UserService) {}
  @Get("id")
  async findById(@Param("id") id: string) {
    const user = await this.cache.wrap(`user:${id}`, () => this.userService.findById(id), { ttl: 600 });
    return user;
  }
}
```
