# RestAPI

## request

> 마지막 / 를 붙이지 않는다.
> 항상 소문자를 사용한다.
> 항상 복수형을 사용한다.
> 명령어는 동사를 사용한다.
> 케밥케이스를 사용한다.
> 파일 확장자를 쓰지 말아라
> 함수명을 쓰지 말아라
> 필터를 위해 쿼리 파라미터를 사용해라.

```
users/:userId
users/:userId/posts
users/search
```

## response

> relation은 중첩구조로 표현해야한다. DTO단에서 Transform하지 말아라
>
> > relation은 id만 받아라 (shallow entity)
> > relation의 데이터가 필요한 상황에서 다시 요청을 보내라

```json
// Including the Related Entities Directly
{
  "id": 1,
  "name": "Main Entity",
  "related_entities": [
    { "id": 1, "name": "A", "attribute": "a" },
    { "id": 2, "name": "B", "attribute": "b" },
    { "id": 3, "name": "C", "attribute": "c" }
  ]
}
// Including Partial Information of the Related Entities
{
  "id": 1,
  "name": "Main Entity",
  "related_entities": [
    { "id": 1, "name": "A"},
    { "id": 2, "name": "B"},
    { "id": 3, "name": "C"}
  ]
}
// *Use shallow entities
{
  "id": 1,
  "name": "Main Entity",
  "related_entities": [1, 2, 3]
}
```
