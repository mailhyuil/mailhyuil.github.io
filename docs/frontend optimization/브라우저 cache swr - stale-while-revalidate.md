# 브라우저 cache swr

> stale-while-revalidate을 사용한 fetch 라이브러리
>
> > 요청을 보내면 캐시된 데이터를 사용하되
> >
> > > 백그라운드 (메인 스레드가 아닌 웹 워커)에서 원 서버에 검증을 받는다.

```sh
stale-while-revalidate
# 캐시된 데이터를 사용하되, 원 서버에 검증을 받도록 한다.
# 받아온 데이터를 다음 요청에서 사용한다.
Cache-Control: max-age=1, stale-while-revalidate=59
# 0-1 초 사이에 요청이 반복되면 캐싱된 데이터를 사용
# 1-60 초 사이에 요청이 반복되면 캐싱된 데이터를 사용하되 원 서버에 검증을 받는다.
```
