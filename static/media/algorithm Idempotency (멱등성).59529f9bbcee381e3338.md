# algorithm Idempotency (멱등성)

## if문 사용

> 상태값을 확인하여 중복 처리를 방지

```ts
if (!isPaid) {
  await pay();
}
```

## 덮어쓰기 사용

> HTTP PUT 메서드의 멱등성은 이 방식을 의미
>
> > 값을 덮어쓰는 방식으로 중복 처리를 방지

```ts
async function compensate() {
  await db.user.update({
    where: { id },
    data: { isActive: true }, // 원상복구
  });
}
```

## Idempotency-Key 사용

> key를 사용하여 중복 처리를 방지

```ts
// POST /payments
// Headers: Idempotency-Key: abc123

if (idempotencyMap.has("abc123")) {
  return idempotencyMap.get("abc123");
} else {
  const result = process();
  idempotencyMap.set("abc123", result);
  return result;
}
```

## 시간 제한

> 짧은 시간에 여러번 요청이 들어올 경우, 중복 요청으로 판단하여 처리

```ts
if (Date.now() - lastSentTime < 10000) {
  return; // 무시
}
```
