# db query Pagination

## 오프셋 기반

```sql
SELECT id FROM Users
ORDER BY age
LIMIT 10
OFFSET (page * 10); # 페이지당 10개의 데이터
```

### 장점

> 쉽다
>
> > 다양한 정렬 방식을 사용 가능
> >
> > > pagination bar를 구현할 수 있다.

### 단점

> 뒤로 갈 수록 느린 쿼리
>
> > 잦은 데이터 쓰기 시 데이터 누락이 있을 수 있다.

## 커서 기반

```sql
SELECT name FROM Users
WHERE id < ?
ORDER BY id DESC
LIMIT 5;
```

### 장점

> cursor기반으로 다음 페이지를 가져오기 때문에 데이터의 누락과 중복 문제가 없다.
>
> > 커서가 데이터를 정적으로 유지할 필요 없어 실시간 데이터를 효과적으로 처리 할 수 있다

### 단점

> cursor가 중복없고 순차적이어야한다. (정렬이 어려움)
>
> > 사용자가 특정페이지로 옮기지 못한다

### 커스텀 커서

> 두 개 이상의 컬럼을 합치거나, 임의의 컬럼을 만들어서 커서를 지정!
