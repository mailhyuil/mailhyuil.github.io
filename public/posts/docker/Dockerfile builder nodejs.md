# Dockerfile nodejs builder

> 빌드 단계를 위한 레이어

```dockerfile
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nx build client

# 여기서부터 진짜 레이어 --from=builder를 통해서 빌드 단계에서 생성된 파일을 가져온다.
FROM nginx:alpine
COPY --from=builder /app/Dockerfiles/nginx.conf /etc/nginx/conf.d/default.conf

...
```
