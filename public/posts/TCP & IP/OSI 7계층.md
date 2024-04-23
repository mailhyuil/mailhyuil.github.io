# OSI 7 계층

> 네트워크 통신을 7단계로 나눈 것
>
> > 높은 단계로 갈수록 오버헤드가 커진다.
> >
> > > e.g. HTTP는 애플리케이션 계층(L7)에 위치한다, 만약 세션 계층(L5)만으로 수행할 수 있는 일이라면 세션 계층(L5)의 protocol을 찾아라
> > >
> > > > 웹소켓은 transport 계층(L4)이고 초기화시에만 핸드쉐이크만 http(L7)를 사용한다.
> > > >
> > > > postgres, redis, kafka 전부 transport 계층(L4)

```sh
L7 application # 사용자가 디바이스를 통해 상호작용할 수 있는 부분이 애플리케이션 계층(L7)이다 (e.g. ssh)
L6 presentation
L5 session
L4 transport
L3 network
L2 data link
L1 physical
```
