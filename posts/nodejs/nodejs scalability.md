# nodejs scalability

1. Event-Driven, Non-Blocking I/O
   - 대부분의 언어는 요청마다 쓰레드를 생성 (cpu, memory 부하)
   - nodejs는 컨텍스트 스위칭 없음 (cpu 부하 없음)
   - nodejs는 단일 스레드 (memory 부하 없음)
   - 이벤트 루프를 통해 비동기적으로 처리
2. lightweight
   - 메모리 사용량이 적고, CPU 부하가 적음
   - 시작 시간이 빠름
   - 작은 스펙의 서버에서도 동작 가능
   - 마이크로 서비스 아키텍처에 적합
3. 커넥션이 많은 경우에 적합
   - 웹소켓, long lived connection에 적합
   - 단일 스레드로 동작하기 때문에
   - 다른 언어라면 모든 커넥션에 쓰레드를 생성해야 함 (cpu, memory 부하)
