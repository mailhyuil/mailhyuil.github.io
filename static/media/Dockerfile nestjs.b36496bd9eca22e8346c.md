# Dockerfile nestjs

```Dockerfile
FROM node:alpine as deps
WORKDIR /app
COPY package*.json .
RUN npm ci

FROM node:alpine as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm prune --production

FROM node:alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist/main" ]
```
