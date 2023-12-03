# nest advanced message queue

> 메세지 큐 : 서버간의 통신을 위한 메세지를 저장하는 큐
>
> > bullMQ : redis 기반 메세지 큐

## install

```sh
npm i bull
npm i @nestjs/bull

# redis 설치
docker run --name redis -d -p 6379:6379 redis:latest

# redis-cli
npm i -g redis-cli
rdcli -h localhost -p 6379
```
