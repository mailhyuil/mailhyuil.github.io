# CoreDNS & kube-dns

> 쿠버네티스는 CoreDNS를 DNS server로 사용한다.
>
> 현재는 kube-dns에서 CoreDNS로 변경되었다.
>
> 그러나 여전히 특정 기능은 kube-dns를 사용하기도 한다.
>
> > 모든 pod 내에는 /etc/resolv.conf 파일이 존재한다. (주의!! : pod내에 있다 node가 아니다.)
> >
> > 이 파일 내에는 nameserver가 kube-dns로 설정되어있다.
> >
> > > ip 대신 domain name을 사용하면 CoreDNS로 요청이 들어가고 해당하는 pod로 라우팅 된다.
> > >
> > > pod는 pod-ip, service는 service-name으로 생성

## pod

> pod-ip.namespace.pod.cluster.local
>
> > 10.0.0.0
> >
> > A 레코드 : 10-0-0-0.namespace.pod.cluster.local
> >
> > (e.g. 10-0-0-0.default.pod.cluster.local)
> >
> > 서비스 생성시

### pod name으로 접근

> pod는 기본으로 pod-ip 방식으로만 도메인 네임이 생성됨
>
> > 네임을 지정해서 접근하려면 spec.hostname을 지정해야함
> >
> > hostname 지정 시 pod-ip-address 대신 hostname을 사용할 수 있다.
> >
> > (e.g. curl pod-hostname / curl pod-hostname.service-name.namespace.svc.cluster.local)
> >
> > > hostname 지정 파드를 생성 -> service 생성 -> curl pod-hostname

## service

> service-name.namespace.svc.cluster.local
>
> > 10.0.0.0
> >
> > A 레코드 : 10-0-0-0.namespace.svc.cluster.local
> >
> > (e.g. 10-0-0-0.default.svc.cluster.local)

## /etc/resolv.conf

> search 옵션
>
> search default.svc.cluster.local svc.cluster.local cluster.local
>
> hello라는 이름으로 요청을 하면 search 옵션을 뒤에 붙여서 전부 찾는다.
>
> hello.default.svc.cluster.local / hello.svc.cluster.local / hello.cluster.local
>
> 따라서 svc는 이름으로만 써도 된다.
