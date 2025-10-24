# Dockerfile node - bcrypt

> bcrypt는 의존성을 필요로 하기 때문에 빌드 스테이지에서 의존성 설치 후 빌드

```Dockerfile
# ✅ 1단계: 빌드 스테이지
FROM node:20-slim AS builder

# bcrypt를 위한 의존성 설치
RUN apt-get update && apt-get install -y \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./

# bcrypt를 여기서 빌드
RUN npm install

# ✅ 2단계: 실행 스테이지 (가벼운 이미지)
FROM node:20-slim

WORKDIR /app

# node_modules만 복사
COPY --from=builder /app/node_modules ./node_modules
COPY . .

CMD ["node", "index.js"]
```
