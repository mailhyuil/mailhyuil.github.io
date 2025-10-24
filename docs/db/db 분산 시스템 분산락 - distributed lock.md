# db 분산 시스템 분산락 - distributed lock

> 쓰기 db가 여러개인 경우 분산락을 사용해야 한다.
>
> > 분산락은 application level에서 redis를 사용하여 구현하거나 db level에서 advisory lock을 사용하여 구현할 수 있다.
