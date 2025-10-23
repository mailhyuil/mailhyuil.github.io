# docker alpine keep-alive

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

RUN npx nx build admin --configuration=production --buildLibsFromSource

FROM alpine as production

COPY --from=builder /app/dist/apps/admin /app/admin

ENTRYPOINT ["tail", "-f", "/dev/null"]
```
