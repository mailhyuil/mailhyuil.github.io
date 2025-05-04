# js Map vs Object

## Object

```md
1. key로 문자열, Symbol만 가능
2. 삽입 순서 보장하지 않음
3. for..in, Object.keys(), Object.values(), Object.entries()로 순회 가능
4. key가 적으면 빠르지만 많으면 느려짐
5. Map 기능과 관련없는 프로퍼티도 존재 (e.g. Object.hasOwnProperty), Map에 필요한 기능 부재 (e.g. size)
6. JSON.stringify()로 직렬화 가능
```

## Map

```md
1. key로 모든 타입 가능
2. 삽입 순서 보장
3. for..of, Map.keys(), Map.values(), Map.entries()로 순회 가능
4. key가 많아도 빠름
5. Map 기능만 존재
6. 직렬화 불가능 (직접 구현)
```
