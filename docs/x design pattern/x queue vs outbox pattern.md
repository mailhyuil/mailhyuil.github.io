# queue vs outbox pattern

## queue

- 빠르다
- 이벤트가 유실될 경우 재시도 로직등이 필요
- 시스템이 느슨하게 연결됨
- 유실되어도 괜찮은 데이터에 사용

## outbox pattern

- db transaction 내에서 이벤트를 만들기 때문에 정합성 문제 해결 (SoT)
- 둘 중 하나만 성공하는 상태 없음
- 비싸고 더 무거운 구조
- 정합성이 반드시 보장되어야 하는 데이터에서 사용

```ts
await transaction([
  order.insert(), // 데이터 업데이트
  outbox.insert({ event: "ORDER_CREATED" }), // outbox table에 적재
]);

// db polling
// * 또는 debezium과 같은 notifier 기능 사용
// * index scan이 되는게 중요
async function worker() {
  while (true) {
    const events = await outbox.findBatch(100);

    if (events.length === 0) {
      await sleep(1000);
      continue;
    }

    await process(events);
  }
}
```
