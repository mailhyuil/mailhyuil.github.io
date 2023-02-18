# prisma raw query

> 데이터베이스의 쿼리를 사용

## $queryRaw

```
const result = await prisma.$queryRaw`SELECT * FROM User`
```

```
const email = 'emelie@prisma.io'
const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`
```

## $executeRaw

> 영향 받은 로우의 넘버를 리턴

```
const emailValidated = true
const active = true

const result: number =
  await prisma.$executeRaw`UPDATE User SET active = ${active} WHERE emailValidated = ${emailValidated};`
```
