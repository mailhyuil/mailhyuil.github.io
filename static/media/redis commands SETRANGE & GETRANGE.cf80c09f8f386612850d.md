# redis commands SETRANGE & GETRANGE

> String 타입의 문자열 일부분만 가져오는 명령어

```sh
SET key "hello world"

GETRANGE key 0 4 # hello

SETRANGE key 6 "redis" # hello redis
```

## 고급 사용

### product entity

```prisma
model Product {
    id String @id @default(cuid())
    name String
    type String
    color String
    material String
}
enum ProductType {
    CLOTH
    SHOES
    BAG
    ...
}
enum ProductColor {
    RED
    BLUE
    GREEN
    BLACK
    WHITE
    ...
}
enum ProductMaterial {
    COTTON
    LEATHER
    WOOL
    SILK
    DENIM
    ...
}
```

### 값을 단순한 문자열로 인코딩

```js
const ProductTypeMap = {
    CLOTH: 'a',
    SHOES: 'b',
    BAG: 'c',
    ...
}
const ProductColorMap = {
    RED: 'a',
    BLUE: 'b',
    GREEN: 'c',
    BLACK: 'd',
    WHITE: 'e',
    ...
}
const ProductMaterialMap = {
    COTTON: 'a',
    LEATHER: 'b',
    WOOL: 'c',
    SILK: 'd',
    DENIM: 'e',
    ...
}
```

### redis

```sh
SET item:1 abf
SET item:2 gbo

# 상품의 모든 properties 가져오기
GETRANGE item:1 0 0
# 상품의 모든 properties 업데이트
SETRANGE item:1 0 bcd
# 여러 상품의 모든 properties 가져오기
MGET item:1 item:2
# 여러 상품의 모든 properties 업데이트
MSET item:1 abc item:2 def
```
