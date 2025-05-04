# Deployment vs StatefulSet vs DaemonSet

## Deployment

> Stateless 방식으로 Pod을 관리

## StatefulSet

> Stateful 방식으로 Pod을 관리
>
> StatefulSet은 내부적으로 ReplicaSet을 생성하지 않으며 rollback이 불가하다.
>
> > 고정된 ip, 순차적인 업데이트, 배포
> >
> > > Pod 별로 별도의 identifier를 부여해서 혹시나 Pod이 재생성 되더라도 그 상태(ip)를 유지할 수 있게끔 유도하는 식
> > >
> > > > Pod의 DNS를 고정시켜주고 싶은 경우나 스토리지가 동일한 상태를 유지하도록 세팅하는 경우에 사용
> > > >
> > > > > MySQL, Zookeeper, Kafka 를 배포할 때 Stateful 방식을 사용한다.

## DaemonSet

> 데몬셋은 특정 노드 또는 모든 노드에 항상 실행되어야 할 특정 파드를 관리 합니다.
>
> > 모든 노드에 파드를 복사에서 실행시켜줌
> >
> > > Cluster IP 가 필요 없다고 알려주면, DNS 서버는 (해당 Service 를 위한 DNS Lookup 요청에) 소속된 Pod IP 주소 목록을 전부 반환
