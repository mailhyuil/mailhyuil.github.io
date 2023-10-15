# kube-dns

> CoreDNS : Pod와 Service를 위한 DNS 서버
>
> > 모든 pod 내에는 /etc/resolv.conf 파일이 존재한다.
> > (주의!! : pod내에 있다 node가 아니다.)
> > 이 파일 내에는 nameserver가 kube-dns로 설정되어있다.
> >
> > > ip 대신 name을 사용하면 kube-dns CoreDNS로 요청이 들어가고 해당하는 pod로 라우팅 된다.

## pod

> pod-ip.namespace.pod.cluster.local
>
> > 10.0.0.0
> > A 레코드 : 10-0-0-0.namespace.pod.cluster.local
> > ex) 10-0-0-0.default.pod.cluster.local

## service

> service-name.namespace.svc.cluster.local
>
> > 10.0.0.0
> > A 레코드 : 10-0-0-0.namespace.svc.cluster.local
> > ex) 10-0-0-0.default.svc.cluster.local
