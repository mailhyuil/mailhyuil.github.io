# kube-dns

> CoreDNS
>
> > 모든 pod 내에는 /etc/resolv.conf 파일이 존재한다.
> > 이 파일 내에는 nameserver가 kube-dns로 설정되어있다.
> > ip 대신 name을 사용하면 kube-dns CoreDNS로 요청이 들어가고 해당하는 pod로 라우팅 된다.
