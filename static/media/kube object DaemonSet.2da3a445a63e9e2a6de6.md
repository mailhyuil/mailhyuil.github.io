# kube object DaemonSet

> 데몬셋은 특정 노드 또는 모든 노드에 항상 실행되어야 할 특정 파드를 관리 합니다.
>
> > 모든 노드에 파드를 복사에서 실행시켜줌
> >
> > > Cluster IP 가 필요 없다고 알려주면, DNS 서버는 (해당 Service 를 위한 DNS Lookup 요청에) 소속된 Pod IP 주소 목록을 전부 반환

## volumeClaimTemplates

> volumes 대신 volumeClaimTemplates를 사용
