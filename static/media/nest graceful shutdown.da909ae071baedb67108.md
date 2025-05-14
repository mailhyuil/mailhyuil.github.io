# nest graceful shutdown

> log의 경우 buffer에 남은 로그가 있을 수 있으므로, log를 flush하는 작업이 필요하다.
>
> > consumer의 경우 consume을 중단하고 남은 메시지를 처리해야 한다.
> >
> > > 프로세스 종료는 SIGINT를 보낸다. (pm2 기준) (SIGTERM으로 대체할 수도 있음)
> > >
> > > > SIGINT를 받고 1.6s 동안 exit하지 않으면 SIGKILL을 보낸다.

## main.ts

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const server = app.listen(3000, () => console.log("Running…"));

  setInterval(() => server.getConnections((err, connections) => console.log(`${connections} connections currently open`)), 1000);

  // SIGTERM, SIGINT를 받으면 shutDown 함수를 실행한다.
  process.on("SIGTERM", shutDown);
  process.on("SIGINT", shutDown);

  // 추가된 connection을 connections에 추가하고, close되는 connection을 connections에서 제거한다.
  const connections = [];
  server.on("connection", (connection) => {
    connections.push(connection);
    connection.on("close", () => (connections = connections.filter((curr) => curr !== connection)));
  });
}

function shutDown() {
  console.log("Received kill signal, shutting down gracefully");
  app.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Could not close connections in time, forcefully shutting down");
    process.exit(1);
  }, 10000);

  connections.forEach((curr) => curr.end()); // close all open connections
  setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000); // destroy all open connections
}
```
