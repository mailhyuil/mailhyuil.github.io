# db 분산 트랜잭션 TCC (Try-Confirm-Cancel) 패턴

> 자원을 예약(Try)하고 모든 자원이 Try에 성공하면 Confirm 실패하면 Cancel
>
> > SAGA 패턴보다 더 엄격한 분산 트랜잭션 처리 패턴
