# nx/nestjs server Dockerfile

```Dockerfile
FROM node:lts-alpine as deps
RUN apk add g++ make py3-pip
WORKDIR /app
COPY package*.json .
RUN npm ci --force

FROM node:lts-alpine as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx nx build server

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist/packages/server/ ./dist
EXPOSE 3000
CMD [ "node", "dist/main" ]
```
