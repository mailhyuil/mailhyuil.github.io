# node:lts-alpine error

```Dockerfile
FROM node:8.12-alpine
# 추가
RUN apk add g++ make py3-pip
EXPOSE 8080
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "start"]
```
