# nginx upstream

> upstream_server === Origin Server
>
> > nginx를 프록시 서버로 사용할 때, upstream server는 nginx가 요청을 전달할 분산 서버들을 의미한다.

## upstream

```conf
upstream my_server {
    server ip_address:4200;
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


# least_conn
# least_conn 옵션은 가중치를 고려하면서 연결된 접속자가 가장 적은 서버로 요청을 분배한다.
upstream my_server {
	least_conn;
    server ip_address:4200;
    server ip_address:4201;
}


# least_time
# least_time 옵션은 연결된 접속자가 가장 적으면서 평균 응답시간이 가장 적은 쪽으로 요청을 분배한다.
upstream my_server {
	least_time;
    server ip_address:4200;
    server ip_address:4201;
}
```
