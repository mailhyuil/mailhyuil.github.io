## Dockerfile nx nestjs + prisma

> prisma generate를 해줘야함

```dockerfile
FROM node:lts-alpine
WORKDIR /app
COPY /dist/apps/server .
COPY /.env.production .env
COPY /prisma/schema.prisma ./schema.prisma
RUN npm ci --force
RUN npx prisma generate --schema schema.prisma
EXPOSE 3000
CMD ["node", "main.js"]
```
