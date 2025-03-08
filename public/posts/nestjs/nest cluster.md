# nest cluster

> nestjs에서 cluster를 사용하여 cpu 사용률을 높이기
>
> > pm2의 cluster mode와 같은 효과

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cluster from "cluster";
import * as os from "os";

async function bootstrap() {
  if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master process ${process.pid} is running`);

    // CPU 코어 수만큼 Worker 생성
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
    });
  } else {
    // Worker 프로세스 실행
    NestFactory.create(AppModule)
      .then(app => app.listen(3000))
      .then(() => console.log(`Worker ${process.pid} started`));
  }
}

bootstrap();
```
