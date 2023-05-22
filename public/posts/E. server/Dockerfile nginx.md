# Dockerfile nginx

```
FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY dist/packages/client /usr/share/nginx/html

EXPOSE 80
```
