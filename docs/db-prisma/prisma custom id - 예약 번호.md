# prisma custom id - 예약 번호

> 사용자 정의 함수 생성

## generate_reservation_number()

```sql
CREATE OR REPLACE FUNCTION generate_reservation_number() RETURNS TEXT AS $$
DECLARE
  reservation_number TEXT;
BEGIN
  reservation_number := LPAD(FLOOR(RANDOM() * 100)::TEXT, 2, '0')
                       || '-' || LPAD(FLOOR(RANDOM() * 1000)::TEXT, 3, '0')
                       || '-' || LPAD(FLOOR(RANDOM() * 100000)::TEXT, 5, '0');
  RETURN reservation_number;
END;
$$ LANGUAGE plpgsql;
```

## prisma schema에 적용

```prisma
reservationNumber  String  @default(dbgenerated("generate_reservation_number()")) @unique
```
