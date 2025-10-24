# cache browser cache stale-while-revalidate

> 캐시된 데이터를 사용하되, 원 서버에 검증을 받도록 한다.
>
> > 받아온 데이터를 다음 요청에서 사용한다.

```sh
Cache-Control: max-age=1, stale-while-revalidate=59
# 0-1 초 사이에 요청이 반복되면 캐싱된 데이터를 사용
# 1-60 초 사이에 요청이 반복되면 캐싱된 데이터를 사용하되 원 서버에 검증을 받는다.
```
