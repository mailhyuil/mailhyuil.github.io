# pubic subnet & private subnet

> Public subnet과 private subnet 간에 NAT(Network Address Translation)를 구성
>
> > public subnet은 인터넷 게이트웨이로 인터넷에 연결

## public

> Public subnet은 외부 인터넷과 직접 통신할 수 있는 서브넷
>
> > Public subnet에 있는 인스턴스는 인터넷에 직접 공개됩니다.
> >
> > > 웹 서버, 로드 밸런서, CDN(Content Delivery Network) 등의 공개적인 서비스를 제공

## private

> private subnet은 외부 인터넷에서 직접 액세스할 수 없는 서브넷
>
> > 보안을 위해 내부 네트워크와만 통신하는 인스턴스들
> >
> > > 데이터베이스, 애플리케이션 서버, 백그라운드 작업 인스턴스 등의 민감한 데이터나 작업을 처리하는 데 사용
