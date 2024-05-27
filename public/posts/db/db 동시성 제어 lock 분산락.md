# db transaction lock Distributed Lock (분산 락)

> 서버가 여러대인 상황에서 동일한 데이터에 대한 동기화를 보장하기 위해 사용한다.
>
> > Redis의 RedLock 알고리즘, Postgresql의 AdvisoryLock
> >
> > > 락에 대한 정보를 "어딘가"에 공통적으로 보관하고 있어야 한다
> > >
> > > 여러대의 서버들은 공통된 "어딘가"를 바라보며, 자신이 임계 영역(critical section)에 접근할 수 있는지 확인한다
