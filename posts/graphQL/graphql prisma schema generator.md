# nest graphQL schema

> prisma schema를 이용하여 graphql schema를 생성한다.

## install

```sh
npm i @prisma-korea/graphql-schema-generator
```

## schema.prisma

```prisma
generator graphql {
  provider = "graphql-schema-generator"
  createCRUD = "true"
  # output = "./generated" This is default path.
}
```

## generate

```sh
npx prisma generate
```
