# Docker run options --restart

> 호스트 시스템 부팅 시 다시 시작
>
> > 메인프로세스가 exit으로 종료되도 다시 재시작

```sh
no # 기본값
--restart always # exit으로 종료되면 exit 코드와 상관없이 다시 재시작
--restart unless-stopped # stop 시키기 전까지는 다시 재시작
--restart on-failure # exit 코드가 0이 아닌 경우에만 다시 시작
--restart on-failure:3
```
