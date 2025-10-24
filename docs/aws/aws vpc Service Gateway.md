# aws vpc Service Gateway

> 내부망 내에 만들어지지 않은 리소스 (e.g. object storage, s3)
>
> > 보통 이런 서비스에 접근하려면 인터넷을 사용
> >
> > > 하지만 사설 통신이 필요한 경우에는 service gateway를 사용
> > >
> > > > 밖에 만든 서비스와 사설 ip로 1:1로 매핑 (service gateway가 만들어준 사설 주소로 접근하면 서비스에 접근할 수 있다.)
> > > >
> > > > > aws에서는 api gateway 사용???
