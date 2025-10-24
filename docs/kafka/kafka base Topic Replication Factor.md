# kafka base Topic Replication Factor

> 토픽 복제 팩터는 토픽의 복제본을 몇개를 유지할 것인지를 결정하는 설정이다.
>
> > 브로커가 down되었을 때 다른 브로커가 데이터를 제공할 수 있도록 하기 위함
> >
> > > Replication Factor가 3일 시 하나의 토픽내 partition은 클러스터 내 3개의 브로커에 복제된다.

## Leader and Follower

> 각 파티션은 하나의 Leader와 여러개의 Follower로 구성된다.
>
> > 실제로 Producer가 데이터를 쓰는 곳은 Leader이며, Follower는 Leader로부터 데이터를 복제한다.
> >
> > > Leader가 죽으면 Follower 중 하나가 Leader가 되어 데이터를 쓰게 된다.
