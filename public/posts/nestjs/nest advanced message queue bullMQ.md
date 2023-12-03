# nest advanced message queue

> redis 기반의 가벼운 메세지 큐
>
> > 요청은 처리될 때까지 큐에서 대기하기 때문에 서버가 다운되어도 메세지가 유실되지 않는다.
> >
> > > 서버 부하가 많은 작업의 경우 MQ에 저장해두고 한번에 처리할 수 있는 양만큼만 가져와서 처리한다.

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
