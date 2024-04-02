# db 식별자 관계 vs 비식별자 관계

## 식별자 관계 (Identifying Relationship)

> 부모 테이블의 PK 또는 Unique Key를 자식 테이블의 PK로 사용하는 관계 (NULL값이 있을 수 없다!)
>
> > 많을 수록 SQL문이 복잡해지지만 성능이 좋음
> >
> > > one-to-one 관계에서만 사용

```prisma
model Product {
    id          Int         @id @default(autoincrement())
    name        String
    price       Int
    productOrder ProductOrder[]
}

model Order {
    id          Int         @id @default(autoincrement())
    orderNumber String      @unique
    productOrder ProductOrder[]
}

/// 식별자 관계
model ProductOrder {
    productId   Int
    orderId     Int
    product     Product     @relation(fields: [productId], references: [id])
    order       Order       @relation(fields: [orderId], references: [id])
    @@id([productId, orderId])
}
```

## 비식별자 관계 (Non-Identifying Relationship)

> 부모 테이블의 PK 또는 Unique Key를 자식 테이블의 FK로 사용하는 관계 (Optional 하다)
>
> 부모 테이블이 없어도 자식 테이블이 독자적으로 존재할 수 있는 경우에 유용
>
> > 자식 테이블은 고유의 PK를 가짐
> >
> > > 많을 수록 성능이 떨어지지만 SQL문이 간단해짐 (하위의 엔티티에서 상위의 엔티티를 찾을 때 다량의 조인이 필요)
> > >
> > > > one-to-many, many-to-many 관계에서 사용

```prisma
model User {
  id Int @id @default(autoincrement())
  email String
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  title String
  content String
  userId Int
  user User @relation(fields: [userId], references: [id])
}
```
