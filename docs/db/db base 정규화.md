# db base 정규화

> 정규형 = Normal Form = NF
>
> > RDBMS에서는 기본으로 3NF를 만족해야 한다.

## 1정규형 (1NF)

> 하나의 필드에서 하나의 값만을 가져야 한다.

```prisma
/// bad
model User {
  id        Int      @id @default(autoincrement())
  name      String
  programs  String // "헬스, 주짓수, 수영" x
}

/// good
model User {
  id        Int      @id @default(autoincrement())
  name      String
  program   String // "헬스 o
}
```

## 2정규형 (2NF)

> 관련이 없는 필드는 분리한다.
>
> > Partial Dependency(부분 종속)를 제거한다.
> >
> > > 복합키가 될 수 있는 필드 확인 (userId와 program)
> > >
> > > > program의 partial dependency => programPrice가 있으니 program 테이블로 분리한다.

```prisma
/// bad
model User {
  id        Int      @id @default(autoincrement())
  name      String
  registered Boolean
  program   String
  programPrice  Int /// x User와 가격은 관련이 없다. /// program의 가격을 변경하려면 모든 User의 가격을 변경해야 한다.
}

// good
model User {
  id        Int      @id @default(autoincrement())
  name      String
  program   Program  @relation(fields: [programId], references: [id])
  programId Int
  registered Boolean
}
model Program {
  id        Int      @id @default(autoincrement())
  name      String
  price     Int
  users     User[]
}
```

## 3정규형 (3NF)

> 복합키로 만들 수 있는 필드는 없으나, 다른 필드에 의존하는 필드가 있을 경우 분리한다.
>
> > 일반 컬럼에 의존하는 컬럼을 분리한다.

```prisma
/// bad
model User {
  id        Int      @id @default(autoincrement())
  name      String
  program   Program  @relation(fields: [programId], references: [id])
  programId Int
  registered Boolean
}
model Program {
  id        Int      @id @default(autoincrement())
  name      String
  price     Int
  users     User[]
  coach     String
  coachCareer String
}
/// good
model User {
  id        Int      @id @default(autoincrement())
  name      String
  program   Program  @relation(fields: [programId], references: [id])
  programId Int
  registered Boolean
}
model Program {
  id        Int      @id @default(autoincrement())
  name      String
  price     Int
  users     User[]
  coach     Coach    @relation(fields: [coachId], references: [id])
  coachId   Int
}
model Coach {
  id        Int      @id @default(autoincrement())
  name      String
  career    String
  program   Program[]
}
```

## BCNF
