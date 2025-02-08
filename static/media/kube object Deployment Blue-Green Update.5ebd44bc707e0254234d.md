# kube object Deployment Blue-Green Update

> 구버전과 신버전을 동시에 띄워서 구버전의 트래픽을 신버전으로 옮기는 방식 (구버전: Blue, 신버전: Green)
>
> > Rollback이 쉽고, 업데이트 과정에서 downtime(중단되는 시간)이 없다는 장점이 있음
> >
> > > 하드웨어 리소스가 2배로 필요하다는 단점이 있음

## 방법

> label을 이용해서 구버전과 신버전을 구분한다.
>
> > service의 matchLabel을 구버전에서 신버전으로 변경한다. (kubectl edit svc)
