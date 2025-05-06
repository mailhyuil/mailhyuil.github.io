# prisma migrate

> 프로토타이핑 할 때는 빠르게 db push를 하고
>
> > 실서버 배포 전단계에서 migrate dev로 마이그레이션 파일 생성
> >
> > 생성된 migration 파일을 ci/cd에서 migrate deploy
> >
> > > 이후로는 계속 migration dev로 개발

## dev / deploy

> dev는 스키마 변경을 감지해 마이그레이션 파일을 생성하고 데이터베이스에 적용한다.
>
> dev는 shadow database를 사용한다.
>
> > deploy는 마이그레이션 파일을 읽어서 데이터베이스에 적용한다.
> >
> > deploy는 로컬에서 실행하는게 아니라 ci/cd 파이프라인에서 실행되어야한다.
> >
> > deploy는 "development 데이터베이스"를 "production 데이터베이스"와 sync 하는 것
> >
> > > local에서 dev를 사용하고, ci/cd에서 deploy를 사용해 마이그레이션 파일을 적용하자

```sh
prisma migrate dev --schema ./prisma
prisma migrate deploy
```

## diff

> 변경

```sh
npx dotenv -e apps/server/.env.production -- \
npx prisma migrate diff \
--from-migrations prisma/migrations \
--to-schema-datasource prisma/schema.prisma \
--shadow-database-url postgres://username:password*@59.3.87.92:5432/my-shadow-db?schema=public \
--script prisma/migrations/init/migration.sql
```

## resolve

> 실패한 마이그레이션 파일을 marking 하는 기능
>
> > 이전 migration으로 rollback 하는 기능

```sh
dotenv -e apps/server/.env.production -- \
npx prisma migrate resolve --applied init_migration
```
