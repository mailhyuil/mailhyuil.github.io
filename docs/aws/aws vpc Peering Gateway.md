# aws vpc Peering Gateway

> 서로 다른 두개의 vpc는 통신이 불가능하다.
>
> > Peering은 서로 다른 두개의 vpc를 연결하는 것
> >
> > > Peering Gateway는 두 개의 Amazon VPC 간에 프라이빗한 네트워크 연결을 제공하는 기능

## Peering gateway 생성

> vpc1_to_vpc2로 네이밍
>
> > 두 VPC의 라우팅 테이블에 둘다 넣기
> >
> > > cidr는 상대 vpc의 cidr범위
