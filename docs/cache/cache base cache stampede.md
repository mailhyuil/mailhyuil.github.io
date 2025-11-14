# cache base cache stampede (dog pile effect)

Cache의 TTL이 동시에 만료되면서 여러 요청이 DB로 몰리는 현상

## 해결법

1. 하나의 cache-miss만 원본 서버로 요청하고 나머지는 대기하도록 한다. (mutex lock)
2. 랜덤 TTL → 만료 시점을 분산
3. Soft TTL / Stale While Revalidate → 만료된 데이터 임시 반환 후 비동기 갱신
