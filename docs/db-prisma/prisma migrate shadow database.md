# prisma migrate shadow database

> dev 환경에서 사용되는 일시적인 데이터베이스
>
> 파일을 생성하고 적용하는 과정에서 실제 데이터베이스에 영향을 주지 않기 위해 사용한다.
>
> > 자동으로 생성되고 삭제된다
> >
> > > prisma migrate dev, prisma migrate reset에서 생성
> > >
> > > > prisma diff도 shadow database를 필요로한다.
