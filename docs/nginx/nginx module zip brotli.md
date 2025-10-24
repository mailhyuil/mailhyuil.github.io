# nginx module zip brotli

> 구글에서 2013년에 발표된 압축 알고리즘
>
> > 텍스트 압축에 가장 적합하기 때문에 웹 서버 등에서 인터넷 웹 사이트를 더 빠르게 로드하는데에 사용된다.
> > gzip보다 약 20% 더 효율적이다.

## install module

```sh
# 확인
nginx -V 2>&1 | grep brotli

# 없으면 설치
sudo apt update
sudo apt install -y brotli

sudo apt install -y software-properties-common
sudo add-apt-repository -y ppa:hda-me/nginx-stable
sudo apt update
sudo apt install -y nginx
```

## install module (docker)

```Dockerfile
# Build container
FROM node:18-alpine AS builder

# Make sure we got brotli
RUN apk update
RUN apk add --upgrade brotli
WORKDIR /usr
COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build
RUN cd /usr/dist && find . -type f -exec brotli {} \;

# Actual runtime container
FROM alpine
RUN apk add brotli nginx nginx-mod-http-brotli

# Minimal config
COPY nginx/default.conf /etc/nginx/http.d/default.conf

# Actual data
COPY --from=builder /usr/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
```

## nginx.conf

```conf
# 🔥 Brotli 압축 활성화
brotli_static on;
```
