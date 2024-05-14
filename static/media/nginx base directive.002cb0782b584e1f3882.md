# nginx base directive

## simple directive

```conf
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log notice;
...
```

## block directive

```conf
events {

}
http {

}
server {

}
```
