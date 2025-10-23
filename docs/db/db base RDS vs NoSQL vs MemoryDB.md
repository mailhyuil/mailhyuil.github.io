# db base RDS vs NoSQL vs DynamoDB

## RDS

> 관계형 데이터베이스
>
> > 정규화를 통한 데이터 무결성 보장
> >
> > > 복잡한 쿼리
> > >
> > > > PostgreSQL, MySQL, MariaDB, Oracle, SQL Server

```txt
금융 시스템
전자상거래
기업 내부 ERP 시스템
SNS, 블로그 플랫폼
```

## NoSQL

> 비관계형 데이터베이스
>
> > 대량의 비정형 데이터를 DISK에서 빠르게 처리
> >
> > (memory db에 저장하기에는 데이터가 너무 많고, 영속성을 가져야하기에 Disk에 저장하지만 RDS보다는 빠르게 처리)
> >
> > > 데이터 구조가 자주 변경되는 경우
> > >
> > > > MongoDB, DynamoDB, Cassandra

```txt
소셜 미디어 앱 - 대량의 다양한 형태의 데이터를 빠르게 저장 및 조회
챗봇 및 메신저 - 대량의 메시지를 빠르게 저장하고 검색
게임 데이터 - 다양한 데이터를 빠르게 저장 및 검색
실시간 데이터 처리 - json 기반의 데이터를 빠르게 저장 및 검색
```

## MemoryDB

> key-value 데이터베이스
>
> > 단순한 데이터를 메모리에 저장
> >
> > > 가장 빠르다
> > >
> > > > 휘발성
> > > >
> > > > > Redis, Memcached

```txt
캐시 서버
세션 저장소
실시간 분석
실시간 대시보드
```
