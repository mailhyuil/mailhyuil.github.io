# redis commands SORT

> set, sorted set, list에 사용하는 명령어
>
> > 정렬 뿐만 아니라 데이터 결합을 위한 용도로도 사용할 수 있다.
> >
> > > sorted set의 경우 기본으로 score를 기준으로 정렬한다.
> > >
> > > SORT의 경우 기본으로 member를 기준으로 정렬한다. (member가 string일 경우 에러가 발생)
> > >
> > > > SORT는 member만 반환한다. (BY로 sorting criteria를 제공해도 member만 반환한다.)

```sh
SORT books:likes ALPHA # 알파벳 순으로 정렬
SORT books:likes DESC # 내림차순 정렬
SORT books:likes LIMIT 0 2 # 0번째부터 2개만 가져온다.

# member가 아닌 다른 필드를 기준으로 정렬하고 싶을 때
SORT books:likes BY books:*->year # year 필드를 기준으로 정렬

# member가 아닌 다른 필드를 반환하고 싶을 때
SORT books:likes BY books:*->year
    GET books:*->title # title 필드를 반환한다.

SORT books:likes BY books:*->year
    GET books:*->title # title 필드를 반환한다.
    GET books:*->year  # year 필드를 반환한다.

SORT books:likes BY books:*->year
    GET #              # member를 반환한다.
    GET books:*->title # title 필드를 반환한다.
    GET books:*->year  # year 필드를 반환한다.

# 정렬이 아닌 데이터 결합을 위해서만 사용 시 (nosort) (그냥 없는 필드를 입력해도 똑같다)
SORT books:likes BY nosort
    GET #              # member를 반환한다.
    GET books:*->title # title 필드를 반환한다.
    GET books:*->year  # year 필드를 반환한다.
    LIMIT 0 2          # 0번째부터 2개만 가져온다.
```
