# kafka base Broker

> kafka cluster를 구성하는 서버
>
> > 최소 3개 이상을 권장
> >
> > > broker는 topic과 partition을 가지고 있음

## broker discovery

> 모든 broker는 부트스트랩 서버가 될 수 있다.
>
> > bootstrap server를 연결하면 kafka client는 모든 broker를 알 수 있음
