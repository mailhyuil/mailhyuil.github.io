# kube object StatefulSet

> Stateful 방식으로 Pod을 관리
>
> Volume이 삭제되지 않음
>
> ip가 고정되어 있음
>
> 순차적인 업데이트, 배포
>
> > StatefulSet은 내부적으로 ReplicaSet을 생성하지 않으며 rollback이 불가하다.
> >
> > > Pod 별로 별도의 identifier를 부여해서 혹시나 Pod이 재생성 되더라도 그 상태(ip)를 유지할 수 있게끔 유도하는 식
> > >
> > > Pod의 DNS를 고정시켜주고 싶은 경우나 스토리지가 동일한 상태를 유지하도록 세팅하는 경우에 사용
> > >
> > > StatefuleSet의 내부 pod들은 각자 역할이 다르고, 그 pod들을 따로 관리한다. 이를 통해서 어플리케션 자체의 State를 보장하면서 앱의 생성, 배포, 스케일링기능을 지원한다.

# volumeClaimTemplates

> volumes 대신 volumeClaimTemplates를 사용
