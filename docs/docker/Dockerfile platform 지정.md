# Dockerfile platform 지정

- `FROM --platform=linux/amd64 <image_name>` 사용

```Dockerfile
ARG NODE_VERSION=lts

FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine AS builder

FROM --platform=linux/amd64 alpine AS production
```
