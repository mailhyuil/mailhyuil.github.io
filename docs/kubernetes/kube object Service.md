# kube object Service

> 같은 성격의 pod들을 묶어서 외부에 노출 시킬 수 있는 단일 엔드포인트(ClusterIp / Virtual IP)를 생성
>
> > 로드밸런서 역할 (트래픽에 대한 pod의 부하 분산)
> >
> > > 내부 IP 통신 타입 : ClusterIP
> > >
> > > 외부 IP 통신 타입 : NodePort, LoadBalancer
> > >
> > > > pod 간의 통신을 하기 위한게 아니다!! (그건 CNI의 역할)

## 동작과정

> pod를 생성하면 각 pod에 대한 IP가 생성된다.
>
> service를 생성하면 pod의 IP를 묶은 하나의 ClusterIp(Virtual IP)를 생성한다.
>
> 각 노드에 있는 리눅스의 iptables를 이용하여 ClusterIp(Virtual IP)를 pod의 IP로 포워딩한다. (iptables는 로드밸런서 기능을 가지고 있다.)
>
> kubelet아 ClusterIP가 10.96.100.100 이면 여기여기 ip로 포워딩해줘

## 정리

> ClusterIp : "같은 클러스터" 내부에서만 접근 가능한 IP
>
> NodePort : "같은 VPC" 내부에서만 접근 가능한 IP
>
> LoadBalancer : "외부"에서 접근 가능한 IP
