# Dockerfile stage

> 빌드 단계를 위한 스테이지
>
> > AS를 통해서 스테이지를 구분할 수 있다.
> >
> > > docker build --target=prod으로 스테이지를 선택할 수 있다.

## FROM AS

```dockerfile
ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
EXPOSE 3000
RUN npm ci --production

FROM base as dev
COPY . .
CMD nx build server --configuration=development

FROM base as prod
COPY . .
CMD nx build server --configuration=production

FROM base as test
COPY . .
RUN nx test server
```

## --from

> 기존에 있는 이미지, 스테이지를 참조해서 빌드할 수 있다.

```dockerfile
COPY --from=builder /app/dist/apps/server ./
COPY --from=nginx:alpine /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
```
