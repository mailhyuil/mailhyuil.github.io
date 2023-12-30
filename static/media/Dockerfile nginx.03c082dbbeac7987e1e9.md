# Dockerfile nginx

> https를 사용하기 위해 443도 열어줘야한다

## Dockerfile

```Dockerfile
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps/client /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
```

## run

```sh
docker run --name nginx --add-host=host.docker.internal:host-gateway -p 80:80 -p 443:443 -d nginx
```
