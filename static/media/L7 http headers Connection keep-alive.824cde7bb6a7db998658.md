# http connection keep-alive

> 서버와 tcp 연결을 유지함으로써 성능을 향상시키는 방법
>
> > http/1.1은 keep-alive가 기본적으로 활성화 되어있다.
> >
> > > express의 기본 timeout은 5초
> > >
> > > > 명시적으로 close를 보내서 연결을 바로 끊을 수 있다.

```sh
Connection: keep-alive
Keep-Alive: timeout=5

# close
Connection: close
```
