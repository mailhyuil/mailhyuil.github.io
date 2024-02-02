# prisma schema lowercase

> database의 스키마는 "스네이크 케이스"를 사용하고 테이블 이름은 "복수형"으로 만들자!

```prisma
model Post {
  authorId    User?   @map("author_id")
  content     String?
  id          Int     @id
  publishedAt Boolean @default(false) @map("published_at")
  @@map("posts")
}
```
