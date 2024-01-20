## Dockerfile nx nestjs + prisma

> prisma generate를 해줘야함

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

RUN nx build server

FROM node:lts-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
# 👇 new migrate and start app script
# ❤️ "prisma migrate deploy && node main"
CMD [  "npm", "run", "start:migrate:prod" ]
```
