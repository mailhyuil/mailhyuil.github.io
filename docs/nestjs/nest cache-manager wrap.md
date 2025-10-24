# nest cache-manager wrap

> 데이터를 반환하는 함수를 캐싱하는 방법
>
> > if문으로 감싸는 것을 대체한다.

```ts
@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache, private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.cache.wrap(`user:${id}`, () => this.prisma.user.findUnique({ where: { id } }), 1000);
    return user;
  }
}
```
