# prisma generator

> prisma schema를 참조해서 파일을 생성하는 api
>
> > generate 명령어를 통해 실행할 수 있다.
> >
> > > prisma 커뮤니티에는 여러 generator들이 만들어져 있고 필요에 따라 사용할 수 있다.

## client generator

> prisma schema를 참조해서 prisma client를 생성한다.

```prisma
generator client {
  provider = "prisma-client-js"
}
```

## graphql generator

### install

```sh
npm i @prisma-korea/graphql-schema-generator
```

### schema.prisma

```prisma
generator graphql {
  provider = "graphql-schema-generator"
  createCRUD = "true"
  # output = "./generated" This is default path.
}
```
