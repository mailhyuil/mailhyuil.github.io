# Docker-nodejs

## Dockerfile

```Dockerfile
FROM docker.io/node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
# EXPOSE 3000

CMD ["node", "main.js"]
# CMD ["npm", "run", "serve"]
```

## build

```sh
docker build . -t my_node
```

## run

```sh
docker run -d --name my_node -p 3000:3000 my_node
```
