# Dockerfile angular SSR universal

```Dockerfile
ARG NODE_VERSION=lts

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma        ./prisma

RUN npm config set registry https://registry.npmjs.org/
RUN npm ci
RUN npx prisma generate

COPY . .

RUN npx nx build client --configuration=production

FROM node:${NODE_VERSION}-alpine as production

COPY --from=builder /app/dist/apps/client/browser /app/client/browser
COPY --from=builder /app/dist/apps/client/server /app/client/server

EXPOSE 4000

CMD ["sh", "-c", "node /app/client/server/server.mjs"]
```
