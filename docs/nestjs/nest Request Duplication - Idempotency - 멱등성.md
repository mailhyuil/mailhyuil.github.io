# nest Request Duplication - Idempotency - 멱등성

> 결제 요청이 동시에 두번 들어와버려서 결제가 두번 되는 경우를 방지하기 위한 방법
>
> > 데이터베이스 쓰기 뿐 아니라 결제 API 호출도 중복이 발생할 수 있으므로 이 경우도 고려해서 설계
> >
> > > Request Duplication 을 막는 Pattern들을 소개

## Idempotency Key

> 결제 요청 시 고유한 키를 생성하여 요청 여부를 확인

## Rate Limiting

> 동시에 여러번 요청이 들어오는 것을 방지

## Optimistic Locking

> 결제 처리 완료 후 쓰기 과정에서 버전, 타임스탬프 등을 체크하여 중복 요청을 방지
