# cache TTL

TTL(Time To Live)은 데이터가 유효한 시간을 의미  
TTL이 지나면 해당 데이터는 만료되어 삭제되거나 새로 갱신된다.

## TTL 내부적으로 어떻게 동작하는가

완벽하게 즉시 삭제되는 게 아니라 “lazy deletion + 주기적 스캔\*\*”으로 관리됨.

1. Passive Expiration (수동 만료): 클라이언트가 키를 조회했을 때 만료 여부를 확인 후 삭제
2. Active Expiration (능동 만료): 주기적으로(기본 100ms) 임의의 만료 키들을 샘플링해서 삭제.
