# ssh 터널링 (port-forwarding)

## 옵션

```sh
-L # 로컬 포트 포워딩 (ssh 요청을 받아서 ip:port로 바로 전달)

-R # 원격 포트 포워딩

-D # 다이나믹 포트 포워딩

-N # 원격 명령을 실행하지 않도록 지시

# local_port를 listen하다가 요청이 오면 destination_host:destination_port로 전달

ssh -L <local_port>:<destination_host>:<destination_port> user@ssh_server

ssh -L 5432:private_db_server:5432 ubuntu@public_remote_server
```
