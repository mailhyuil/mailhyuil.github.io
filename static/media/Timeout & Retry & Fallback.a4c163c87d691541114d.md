# Timeout & Retry & Fallback

> 비즈니스적으로 중요한 요청이라도 반드시 timeout을 설정해야한다.
>
> > 처리할 수 없는 요청을 유저가 무한정 기다리면 오히려 UX에 악영향을 미칠 수 있다.
> >
> > > timeout을 설정하고 retry backoff을 적용 후 전부 실패 시 fallback을 항상 설계해야한다.
