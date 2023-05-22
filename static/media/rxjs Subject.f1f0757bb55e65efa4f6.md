# rxjs subject

> Observer이면서 Observable이다.
>
> > 실시간으로 Observable에 값을 추가하고 Subscriber에게 방출할 수 있다.
> >
> > > Cold Observable을 Hot Observable로 변환할 수 있다.

## PublishSubject

> subscribe된 이후부터 이벤트를 방출
>
> > 종료되었을 때 존재하는 구독자 뿐만 아니라 이후에 구독한 subscriber에게도 종료 이벤트를 보내줍니다.
> >
> > > 사용 : 시간에 민감한 데이터를 모델링 할 때 사용합니다 (subscribe 되기 이전의 값이 필요 없는 경우)

## BehaviorSubject

> subscribe 될때 가장 최신의 .next 이벤트를 전달합니다.
>
> > 항상 최신의 .next 이벤트를 방출하기 때문에 초기값 없이는 만들 수 없습니다.
> >
> > > 사용 : 항상 최신 데이터로 채워놓아야 하는 경우에 사용 (유저 프로필)

## ReplaySubject

> ReplaySubject는 bufferSize 개의 이벤트를 저장해 subscribe 될 때 저장된 이벤트를 모두 방출합니다
>
> > 사용 : 최신의 여러 값들을 보여주고 싶을 때 사용 (최근 검색어)
