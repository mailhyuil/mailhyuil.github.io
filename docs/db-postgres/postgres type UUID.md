# postgres type UUID

## UUID란?

UUID(Universally Unique Identifier)는 128비트 길이의 고유 식별자입니다. PostgreSQL에서는 `uuid` 데이터 타입으로 지원합니다.

## UUID 형식

표준 UUID는 다음과 같은 형식을 가집니다:

```
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

예: `550e8400-e29b-41d4-a716-446655440000`

## 테이블에서 UUID 사용

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100),
    email VARCHAR(100)
);
```

## UUID 생성 함수

- `gen_random_uuid()`: 랜덤 UUID 생성 (PostgreSQL 13+)
- `uuid_generate_v4()`: UUID v4 생성 (uuid-ossp 확장 필요)

## 장단점

**장점:**

- 전역적으로 고유함
- 분산 시스템에서 유용
- 순차적이지 않아 보안상 유리

**단점:**

- 16바이트 저장 공간 필요
- 인덱스 성능이 integer보다 느림
- 가독성이 떨어짐

## 예제

```sql
-- UUID 컬럼이 있는 테이블 생성
CREATE TABLE products (
    product_id UUID DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    price DECIMAL(10,2)
);

-- 데이터 삽입
INSERT INTO products (name, price) VALUES ('노트북', 1200000);

-- UUID로 검색
SELECT * FROM products WHERE product_id = '550e8400-e29b-41d4-a716-446655440000';
```
