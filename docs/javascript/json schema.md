# json schema

> json의 스키마를 만들면 유효성 검사를 할 수 있다.

## schema.json

```json
{
  "title": "테스트 스키마",
  "description": "이 스키마는 이렇게 저렇게 하는 용도입니다.",
  "example": ["mad", "play"],

  "$comment": "음... 그냥 남겨 봅니다 :)",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "HELLO": {
      "type": "string"
    },
    "name": {
      "$comment": "음, 이게 과연 좋은 건지 모르겠어요 :(",
      "type": "string",
      "pattern": "^a"
    }
  }
}
```

## test.json

```json
{
  "$schema": "./schema.json",
  "HELLLO": "WORLD"
}
```
