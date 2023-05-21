# Docker-nodejs

## Dockerfile

```
FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

## build

```
docker build . -t my_node
```

## run

```
docker run -d --name my_node -p 3000:3000 my_node
```
