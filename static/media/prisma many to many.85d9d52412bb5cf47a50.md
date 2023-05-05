# prisma many to many

> findMany 시 include
>
> > create 시 relationName:{/...connect}

## prisma는 조인테이블을 알아서 만들어준다.

```prisma
model Product {
  id Int @id @default(autoincrement())
  title String
  content String
  images String[]
  record Record?
  copyrights Copyright[]
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now()) @updatedAt
}

model Copyright{
  id Int @id @default(autoincrement())
  name String
  products Product[]
}
```

## create

```ts
async addCopyright(productId: number, body: CreateCopyrightDTO){
    await this.prismaService.copyright.create({
      data: {
        name: body.name,
        products: {
          connect: {
            id: productId,
          },
        },
      },
    });
  }
```

## findMany

```ts
async findMany(productId: number, body: CreateCopyrightDTO){
const products = await this.prismaService.product.findMany({
  include:{
    copyrights:true
  }
})
  }
```
