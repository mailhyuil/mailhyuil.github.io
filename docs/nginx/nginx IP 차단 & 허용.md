# nginx IP 차단 & 허용

```conf
allow 192.168.1.1;
allow 192.168.1.2;
allow all;

deny 52.230.152.0/24;
deny 192.168.1.2;
deny all;

server {
  listen 80;
  server_name example.com;
}
```
