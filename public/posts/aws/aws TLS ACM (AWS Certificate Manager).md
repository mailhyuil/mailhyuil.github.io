## acm (AWS Certificate Manager)

> TLS 인증서 무료로 지원
>
> > 이메일 인증을 하려면 도메인 공급처에서 개인정보를 public으로 해야함

1. 완전히 정규화된 도메인 이름에 \*.mailhyuil.com 입력
2. DNS 인증 선택 후 레코드 생성
3. "로드 밸런서" 혹은 "클라우드 프론트"를 이용해서 리디렉션

### CNAME

> Route53을 이용하지 않는다면, CNAME 값을 외부 DNS 공급자에 등록을 진행해야 한다.
>
> > Route53에 등록되어있는 도메인은, 유일한 key-value형태로 AWS에서 부여해줍니다.
> >
> > > 이 유일한 key-value값은 해당 CNAME 도메인 레코드가 사용자에게 소유권이 있다는 걸 증명합니다.
> > >
> > > > ACM은 이 2개의 도메인에 대해 각각 2개의 CNAME 레코드를 생성해줍니다. 이 각각의 CNAME 레코드는 유일한 key-value값으로 사용자의 도메인에 대한 소유권을 증명해줍니다.
