# db 동시성 제어 MVCC - Multi-Version Concurrency Control

> lock대신 tuple에 버전을 부여하여 동시성을 제어
>
> > 락 대신 스냅샷으로 직렬가능성을 보장하는 현대식 2PL 대체 기법

| 역할            | 2PL 방식                | MVCC 방식                                           |
| --------------- | ----------------------- | --------------------------------------------------- |
| **읽기**        | S-lock을 걸어 충돌 방지 | “트랜잭션 시작 시점의 snapshot”을 읽음 (락 없음)    |
| **쓰기**        | X-lock으로 충돌 차단    | 새 버전을 만들어(commit 시 최신으로)                |
| **일관성 유지** | 락 유지로 직렬성 보장   | “트랜잭션 타임스탬프 + 가시성 규칙”으로 일관성 유지 |

## 예시

```txt
T1: SELECT * FROM seat WHERE id=1;
→ 현재 snapshot에서 version#1 읽음

T2: UPDATE seat SET status='BOOKED' WHERE id=1;
→ version#2 생성 (version#1은 그대로 남음)
→ T1은 여전히 version#1을 읽을 수 있음 (락 없음)
→ commit 후 version#2가 새 최신이 됨
```
