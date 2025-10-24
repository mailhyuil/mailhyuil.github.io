# linux init initd

> 간단하게 서비스를 관리할 수 있는 명령어
>
> high-level service management command
>
> > systemctl을 사용하면 더 디테일하게 서비스를 관리할 수 있다.
> >
> > systemctl give greater control options.

## usage

```sh
service nginx start
service nginx stop
service nginx restart
service nginx reload
service nginx status

# 실행중인 서비스 목록
service --status-all
```
