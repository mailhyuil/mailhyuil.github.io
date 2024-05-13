# redis base 관계형 데이터 join하기

> 단순하게 pipeline을 사용해서 join시킬 수 있지만, SORT를 사용하면 한번의 요청으로 join시킬 수 있다.

## SORT

```sh
SORT books:likes BY nosort
    GET #              # member를 반환한다.
    GET books:*->title # title 필드를 반환한다.
    GET books:*->year  # year 필드를 반환한다.
    LIMIT 0 2          # 0번째부터 2개만 가져온다.
```
