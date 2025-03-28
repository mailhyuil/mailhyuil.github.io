# nginx base upstream vs downstream

> A -> B로 데이터를 보낼 때
>
> > A의 upstream서버는 B, B의 downstream 서버는 A 이다.
> >
> > > 하나의 서버는 upstream이 될 수도 있고 downstream이 될 수도 있다.

## upstream

```conf
upstream my_server {
    server ip_address:4200 weight=1; # 파라미터를 줄 수 있다.
    server ip_address:4201;
}
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            proxy_pass http://my_server;
        }
}
```

```conf
# ip_hash
# ip_hash 옵션은 ip를 기준으로 요청을 분배한다.
# 만약 A라는 ip가 ip_address:10001에 접속했으면 이후에도 ip_address:10001에 계속 접속하게 되며,
# 한번 접속한 ip는 계속 같은 서버를 사용한다.
upstream my_server {
 ip_hash;
    server ip_address:4200;
    server ip_address:4201;
}
```
