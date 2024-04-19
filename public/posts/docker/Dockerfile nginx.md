# Dockerfile nginx

> https를 사용하기 위해 443도 열어줘야한다

## Dockerfile

```Dockerfile
ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx nx build client --configuration=production

FROM nginx:alpine
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/apps/client/browser /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
```

## run

```sh
docker run --name nginx --add-host=host.docker.internal:host-gateway -p 80:80 -p 443:443 -d nginx
```
