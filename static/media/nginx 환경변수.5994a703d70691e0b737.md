# nginx 환경변수

> nginx는 기본적으로 환경변수를 지원하지 않는다.
>
> > 환경변수를 사용하기 위한 방법
> >
> > Docker nginx image 사용
> >
> > ngx_http_perl_module 사용
> >
> > nginx 대신 openresty를 사용

## Docker

### default.conf.template

> default.conf 대신 default.conf.template을 사용한다.

```conf
upstream todoapi {
    server ${TODO_API};
}

server {
    listen            ${NGINX_PORT};
    listen       [::]:${NGINX_PORT};

    location /api {
        proxy_pass http://todoapi;
    }
}
```

### Dockerfile

```Dockerfile
FROM node:14-alpine as build

WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install
COPY public public
COPY src src
RUN yarn build

FROM nginx:1.19-alpine
ENV NGINX_PORT 80
ENV TODO_API https://host.docker.internal:5000
COPY default.conf.template /etc/nginx/templates/default.conf.template # default.conf.template 사용
COPY --from=build /app/build /usr/share/nginx/html
```
