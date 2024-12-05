# 유저와 관련있는 리소스만 허용

```ts
@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string, options: { user: User }): Promise<PostDTO> {
    const found = await this.prisma.post.findUnique({
      where: { id },
    });
    if (!found) throw new NotFoundException();
    if (!options.user.roles.includes("ADMIN") && options.user.id !== found.userId) throw new ForbiddenException();
    return plainToInstance(PostDTO, found);
  }
}
```
