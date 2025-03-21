# tcp connection pooling

> connection pooling은 사용자가 connection 연결을 열린 상태로 유지하는 데 사용되는 방법이다.
>
> > Connection Pooling은 매번 소켓을 생성하는 것이 아니라 미리 정해진 개수의 Connection을 생성해서 Pool에 보관하다 재사용하여 데이터를 교환하는 방식
> >
> > > connection 연결이 요청될 때 다른 connection을 만드는 것 보다 활성 상태의 connection이 우선된다.
> > >
> > > > 3-way handshaking 과정을 제거할 수 있으므로 훨씬 더 빠르게 통신할 수 있다.
