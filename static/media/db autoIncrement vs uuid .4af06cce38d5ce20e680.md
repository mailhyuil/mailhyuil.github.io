# autoincrement vs uuid

> 애플리케이션 내부용 키로는 increment pk를, 외부에 공개할 키로는 uuid를 사용하는 것을 권장한다.

## autoincrement

> 일반적으로는 auto increment가 성능 면에서 더 우수합니다.

## uuid

> 데이터를 복제하거나 분산 환경에서 작업할 때 UUID를 사용하면 식별자 충돌을 걱정할 필요가 없습니다.
