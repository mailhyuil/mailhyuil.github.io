# prisma index example

## User

```prisma
model User {
  id          String            @id @default(cuid())
  name        String
  roles       Role[]            @unique
  status      UserStatus        @default(ACTIVE)
  tel         String
  username    String?           @unique
  password    String?
  email       String?           @unique
  birthDate   DateTime
  createdAt   DateTime          @default(now()) @map("created_at")
  updatedAt   DateTime          @default(now()) @map("updated_at")
  authentications Authentication[]
  userAttachments UserAttachment[]
  memos           Memo[]
  inquiries       Inquiry[]

  // 사용자의 생성일자에 따라 조회하는 경우가 많은 경우
  @@index([createdAt(sort: Desc)])
  // 사용자의 업데이트일자에 따라 조회하는 경우가 많은 경우
  @@index([updatedAt(sort: Desc)])
  // 상태에 따라 생성일자로 정렬하여 조회하는 경우가 많은 경우
  @@index([roles, createdAt(sort: Desc)])
  // 권한에 따라 생성일자로 정렬하여 조회하는 경우가 많은 경우
  @@index([status, createdAt(sort: Desc)])
  // 권한, 상태, 생성일자로 정렬하여 조회하는 경우가 많은 경우
  @@index([roles, status, createdAt(sort: Desc)])
  @@map("users")
}
```

## Post

```prisma
model Post {
    id          String         @id @default(cuid())
    title       String
    content     String
    createdAt   DateTime       @default(now()) @map("created_at")
    updatedAt   DateTime       @updatedAt @map("updated_at")
    deletedAt   DateTime?      @map("deleted_at")
    attachments Attachment[]
    comments    Comment[]
    snapshots   PostSnapshot[]

    // 무한 스크롤 페이지네이션
    @@index([createdAt(sort: Desc), id])

    // createdAt 기준으로 정렬하여 조회하는 경우가 많은 경우
    @@index([createdAt(sort: Desc)])

    // 소프트 삭제된 레코드를 필터링하는 일이 많은 경우
    // 예를 들어, WHERE deletedAt IS NULL과 같은 쿼리가 자주 발생할 경우
    @@index([deletedAt])

    // deletedAt 기준으로 정렬하여 조회하는 경우가 많은 경우
    @@index([deletedAt, createdAt(sort: Desc)])

    // title 검색로 검색하는 기능이 있는 경우
    @@index([title])

    // 주기적으로 업데이트되는 포스트를 updatedAt 기준으로 조회하거나 정렬하는 경우가 많은 경우
    @@index([updatedAt])

    @@map("posts")
}
```
