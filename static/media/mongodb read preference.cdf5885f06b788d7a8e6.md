# mongodb read preference

> replicaSet에서 primary 멤버에만 쓰기가 가능
>
> > 읽기 작업을 secondary 멤버로 돌려서 작업을 분산시키는 방법
> >
> > > sns같은 서비스는 쓰기가 조금 늦게 읽어져도 상관없어서 사용 가능
> > >
> > > > 배달같은 서비스는 쓰기가 늦게 읽어져버리면 문제가 생기기에 사용 불가

## primary

> 무조건 primary로 읽기 요청

## primaryPreferred

> 가능하면 primary 없으면 scondary로 요청

## secondary

> 무조건 secondary로 요청

## secondaryPreferred

> 가능하면 secondary 없으면 primary로 요청

## nearset

> 평균 ping 시간을 기반으로 지연율이 가장 낮은 멤버로 요청
