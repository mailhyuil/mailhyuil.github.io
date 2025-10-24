# L7 http 3 - QUIC

> http over QUIC (UDP with Congestion Control)
>
> UDP를 사용하여 TCP의 HOL Blocking이 발생하지 않고 QUIC이 다른 기능을 제공한다.
>
> > http2 의 문제를 해결하기 위해 설계된 프로토콜
> >
> > > 모든 HTTP 2 features를 가지고 있다.
> > >
> > > > CPU 사용량이 높다
> > > >
> > > > UDP는 블록될 수 있다.

```sh
[12 34 56 78] 모든 세그먼트가 순서대로 도착하면 정상 작동
[12  4 56 78] 세그먼트 3이 손실되어도 12 56 78은 정상적으로 처리된다.
```

## QUIC

> connection handshake와 TLC handshake를 하나로 합쳐서 더 빠르다
>
> > congestion control at stream level
