## Dockerfile nx nestjs + prisma

```dockerfile
ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine AS builder

# Dockerfile nx nestjs + prisma
RUN apt-get update && apt-get install -y \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY apps/server/.env.production ./.env

RUN npm config set registry https://registry.npmjs.org/
RUN npm ci

COPY . .

RUN npx nx build server --configuration=production

FROM node:${NODE_VERSION}-alpine AS production

COPY --from=builder /app/dist/apps/server ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/.env ./.env

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node main.js"]
```
