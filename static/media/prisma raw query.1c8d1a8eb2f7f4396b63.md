# prisma raw query

> 데이터베이스의 쿼리를 사용
>
> > 괄호 없이 \`\`를 사용하거나 Prisma.sql helper를 사용할 수 있다.

## $queryRaw

```ts
const result = await prisma.$queryRaw`SELECT * FROM users FOR UPDATE`;
const result = await prisma.$queryRaw(Prisma.sql`SELECT * FROM users FOR UPDATE`);
```

```ts
const email = "emelie@prisma.io";
const result = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${email} FOR UPDATE`;
```

## $executeRaw

> 영향 받은 로우의 넘버를 리턴

```ts
const emailValidated = true;
const active = true;

const result: number = await prisma.$executeRaw`UPDATE users SET active = ${active} WHERE emailValidated = ${emailValidated}`;
```
