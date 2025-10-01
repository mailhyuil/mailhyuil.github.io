# db base optimizer execution plans 실행 계획

## 여러개의 인덱스를 사용하는 경우

## 한개의 인덱스만 사용하는 경우

## 인덱스를 사용하지 않는 경우

## hint 사용

```sh
SELECT /*+ INDEX (table_name index_name) */ * FROM table_name;
```
