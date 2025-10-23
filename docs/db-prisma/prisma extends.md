# prisma extends

```js
@Injectable()
export class FileService {
  constructor(private readonly prisma: PrismaService){
    this.prisma.$extends({
      model: {}, // add custom methods or fields to your models
      client: {}, // add client-level methods to Prisma Client
      query: {}, // create custom Prisma Client queries
      result: {}, // add custom fields to your query results
    });
  }
}
```
