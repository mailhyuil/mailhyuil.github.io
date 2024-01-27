## Dockerfile nx nestjs + prisma

```dockerfile
FROM node:lts-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
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
