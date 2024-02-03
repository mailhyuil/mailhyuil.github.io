# docker compose depends_on

> 서비스간의 종속성 순서대로 서비스를 시작
>
> 준비가 완료될 때까지 기다리는 건 아니다!!
>
> > (e.g. primary가 실행되고 나서 replica가 실행되도록)

```yaml
depends_on:
  - service_name
```
