# prisma prisma-where-required

> @where-required로 어노테이션된 필드를 where절에 쓰지 않을 시 에러가 나게 강제한다.

## install

```sh
npm i @kz-d/prisma-where-required
```

## usage

```prisma
generator where-required {
  provider = "prisma-where-required"
  nodeModulePath = "node_modules"
}

model User {
  id    Int     @id @default(autoincrement())
  name String
  organizationId Int  /// @where-required
}
```
