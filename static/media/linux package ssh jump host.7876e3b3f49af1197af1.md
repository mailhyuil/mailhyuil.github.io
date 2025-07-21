# linux package ssh JumpHost

> ssh proxy 서버를 사용하는 구조
>
> > client가 JumpHost(proxy)로 ssh 연결 jump host는 내부 사설망에 위치한 서버로 연결

```sh
ssh -tt <jumb_server_ip> ssh <remote_server_ip>
```
