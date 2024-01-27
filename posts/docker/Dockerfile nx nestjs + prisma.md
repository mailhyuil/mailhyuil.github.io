## Dockerfile nx nestjs + prisma

```dockerfile
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx nx build server --skip-nx-cache

FROM node:lts-alpine

COPY --from=builder /app/dist/apps/server ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/.env.production ./.env

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node main.js"]
```

## v2

```dockerfile
ARG NODE_VERSION=18.0.0

# BUILD STAGE
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx nx build server --skip-nx-cache

# PRODUCTION STAGE
FROM build AS production

COPY /app/dist/apps/server ./
COPY /app/node_modules ./node_modules
COPY /app/package*.json ./
COPY /app/prisma ./prisma/
COPY /app/.env.production ./.env

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node main.js"]
```
