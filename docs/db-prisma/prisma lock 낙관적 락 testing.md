# prisma optimistic lock (낙관적 락) testing

> 일반 쿼리와 트랜잭션 쿼리의 속도 차이 확인
>
> > user 생성 시 group의 userCount를 증가시키는데 이때 트랜잭션이 사용되면 group에 대한 락이 걸리기 때문에 속도가 느려질 것이다.
> >
> > > 일반 쿼리로 20s 걸리던 작업이 트랜잭션으로 10분 이상 걸림
> > >
> > > > transaction에 relation이 있는 경우 relation에 대한 Row Lock이 걸리기 때문에 속도가 느려짐

## schema.prisma

```prisma
model User {
  id String @id @default(uuid())
  username String @unique
  group Group @relation(fields: [groupId], references: [id], onDelete: Cascade)
  groupId Int
  @@map(name: "users")
}

model Group {
  id Int @id @default(autoincrement())
  name String @unique
  userCount Int @default(0) @map(name: "user_count")
  user User[]
  @@map(name: "groups")
}
```

## code

```ts
  async create(data: CreateUserDto) {
    const time = new Date().getTime() + '::::::: CREATE :::::::'
    // 일반 쿼리
    // console.time(time);
    // for (let i = 0; i < 20000; i++) {
    //   // CREATE 8s 걸림
    //   await this.prisma.user.create({
    //     data: {
    //       username: data.username + i,
    //       groupId: 1,
    //     },
    //   });
    //   await this.prisma.group.update({
    //     where: {
    //       id: 1,
    //     },
    //     data: {
    //       userCount: {
    //         increment: 1,
    //       },
    //     },
    //   });
    // }
    // console.timeEnd(time);

    // 트랜잭션 쿼리
    console.time(time);
    await this.prisma.$transaction(
      // CREATE: 12s 걸림
      async (tx) => {
        for (let i = 0; i < 20000; i++) {
          await tx.user.create({
            data: {
              id: i + data.username,
              username: data.username + i,
              groupId: 1,
            },
          });
          await tx.group.update({
            where: {
              id: 1,
            },
            data: {
              userCount: {
                increment: 1,
              },
            },
          });
        }
      },
      {
        timeout: 1000000,
      }
    );
    console.timeEnd(time);
  }
```
