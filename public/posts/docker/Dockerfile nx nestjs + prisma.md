## Dockerfile nx nestjs + prisma

```dockerfile
ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx nx build server --skip-nx-cache

FROM node:${NODE_VERSION}-alpine

COPY --from=builder /app/dist/apps/server ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/.env.production ./.env

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node main.js"]
```
