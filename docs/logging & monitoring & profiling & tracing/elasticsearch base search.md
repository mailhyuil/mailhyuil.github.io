# elasticsearch base search

## searchParams 방식

```sh
GET https://localhost:9200/cats/_search?q=휴일
GET https://localhost:9200/cats/_search?q=휴일 AND 까미
GET https://localhost:9200/cats/_search?q=name:휴일
```

## body 방식

```json
GET https://localhost:9200/cats/_search
{
  "query": {
    "match": {
      "name": "휴일"
    }
  }
}

GET https://localhost:9200/cats/_search
{
  "query": {
    "match_all": {}
  }
}
```

## asterisk

```sh
GET https://localhost:9200/cats/_search?q=휴*
GET https://localhost:9200/logs-2024-*/_search
```
