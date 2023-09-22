# Dockerfile nginx

```
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps/client /usr/share/nginx/html
EXPOSE 80
```
