# kafka base Schema-Registry

> 데이터의 스키마(형식)를 관리하는 중앙 저장소
>
> > Kafka에서 Avro, Protobuf, JSON Schema 등의 데이터 형식을 사용할 때, 데이터 구조를 미리 정의하고 저장하는 역할

## 역할

```md
1. 스키마 저장 및 관리

- Kafka에서 사용하는 데이터 스키마(Avro, JSON, Protobuf)를 중앙에서 관리
- REST API를 통해 스키마 등록 및 조회 가능

2. 스키마 검증 및 호환성 체크

- 새로운 데이터가 들어올 때, 기존 스키마와 비교하여 호환 여부를 자동 검사
- 스키마 버전 관리를 지원하여 변경 이력 추적 가능

3. 데이터 크기 최적화

- Avro/Protobuf는 바이너리 직렬화(Serialization) 방식이라 JSON보다 데이터 크기가 작음
- Kafka 토픽에서 Schema ID만 저장하고, 실제 스키마는 Registry에서 참조

4. 스키마 진화(Schema Evolution) 지원

- 기존 데이터를 깨지 않으면서 새로운 필드를 추가하거나 변경 가능
- BACKWARD, FORWARD, FULL 등의 호환성(Compatibility Mode) 설정 가능
```
