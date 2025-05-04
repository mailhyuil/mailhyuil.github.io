# nginx base directive events

> connection processing에 관한 설정 값들을 정의하는 곳

```conf
events {
  worker_connections 65534;
  use epoll;
  multi_accept on;
}
```
