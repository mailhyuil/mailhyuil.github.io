# nestjs advanced multi-tenancy

> 애플리케이션의 단일 인스턴스가 여러 고객에게 서비스를 제공하는 아키텍처다.
>
> > 각 고객(Tenant)는 독립된 데이터베이스를 가지고 있으며, 고객은 서로의 데이터에 접근할 수 없다.
> >
> > > 각 테넌트에게 다른 서비스를 제공할 수 있다.

## 구현

> data source 나누기 : record 기반, table 기반, schema 기반, database 기반
>
> > client에서 request header에 "x-tenant-id"를 추가하여 테넌트 식별자를 전달한다.
> >
> > > 테넌트 식별자에 따라서 다른 context를 사용한다. (durable provider 사용)
