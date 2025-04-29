# Docker build cache npm install

> 빌드 context가 너무 큰 경우 캐시가 되지 않는다 따라서 COPY . . 는 의존성 설치 후에 하는 것이 좋다.

```Dockerfile
ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --force

COPY . .

RUN npm run build
```
