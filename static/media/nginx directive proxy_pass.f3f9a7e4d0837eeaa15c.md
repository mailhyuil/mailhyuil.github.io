## nginx proxy_pass

> 요청을 라우팅할 ip
>
> > Browser -> public_id:80 -> private_ip:3000

```conf
server {
    listen       80;
    listen  [::]:80;
    location / {
        proxy_pass http://ip_address:3000;
    }
}
```
