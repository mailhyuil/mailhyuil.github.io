# prisma json path

> json 데이터 사용시 path는 특정 key로 들어가게 해줌

## data

```json
{
  "favorites": {
    "catBreed": "Turkish van",
    "dogBreed": "Rottweiler",
    "sanctuaries": ["RSPCA", "Alley Cat Allies"],
    "treats": [
      { "name": "Dreamies", "manufacturer": "Mars Inc" },
      { "name": "Treatos", "manufacturer": "The Dog People" }
    ]
  },
  "fostered": {
    "cats": ["Bob", "Alice", "Svetlana the Magnificent", "Queenie"]
  },
  "owned": {
    "cats": ["Elliott"]
  }
}
```

## where

```ts
where: {
    pets: {
      path: ['favorites', 'dogBreed'],
      equals: 'Rottweiler',
    },
  },
```
