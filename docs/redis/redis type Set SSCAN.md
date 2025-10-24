# redis type Set SSCAN

> Set에는 대용량 데이터가 담겨있을 수 있다
>
> > 그래서 모든 데이터를 전부 가져오는 것은 비효율적이다 이때 SSCAN을 사용
> >
> > > cursor는 0부터 시작하며 scan을 통해 가져온 데이터의 마지막 index를 가리킨다

```sh
SSCAN key cursor [MATCH pattern] [COUNT count] # key에 있는 value를 scan

SSCAN cats 0 MATCH "hy*" COUNT 2 # cats key에 있는 value 중 hy로 시작하는 value를 2개 가져온다
# 반환된 커서 값이 0이 아니라면 다음 scan을 실행할 때 cursor에 넣어준다
```
