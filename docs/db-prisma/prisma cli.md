# prisma cli

## generate

> prisma.schema 파일을 베이스로 prisma client에 반영

## db push & pull

> 개발용
>
> > push => schema를 db에 바로 적용
> >
> > pull => db를 schema에 적용

## migrate dev & deploy

> prisma.schema 파일을 베이스로 DB에 반영
>
> > \_prisma_migrations 테이블에 기록이 쌓인다
> >
> > > 기록이 안맞으면 전체 데이터를 삭제해버린다

## studio

> prisma가 잘 작동하는지 대쉬보드 형태로 볼 수 있다.
