# elasticsearch base crud

> `http://<호스트>:<포트>/<인덱스>/\_doc/<도큐먼트 id>`

## create

> POST 요청으로 create 시에는 id가 자동으로 생성된다.

```json
POST
https://localhost:9200/cats/_doc
{
  "name": "휴일",
  "age": 3
}
```

## update

> data의 일부만 수정 시(PATCH)에는 POST 명령어 뒤에 \_doc이 들어갈 자리에 \_update를 붙여야 한다.

```json
POST
https://localhost:9200/cats/_update/1
{
  "doc": {
    "age": 4
  }
}
```

## create / update

> PUT으로 create 시에는 id를 명시해야 한다.
>
> > 같은 id로 도큐먼트를 생성하면 update가 된다.

```json
PUT
https://localhost:9200/cats/_doc/1
{
  "name": "휴일",
  "age": 3
}
```

## read

```json
GET
https://localhost:9200/cats/_doc/1
```

## delete

```json
# deleteById
DELETE
https://localhost:9200/cats/_doc/1
# deleteAll
DELETE
https://localhost:9200/cats
```
