# nest advanced batch

> 너무 많은 데이터를 가져오면 메모리 부족이 발생할 수 있다.
>
> > pg-query-stream, JSONStream을 사용하여 데이터를 스트림으로 가져와 메모리 부족을 방지한다.
> >
> > > cpu bound 작업일 경우 bull 같은 큐를 사용하여 처리할 수도 있다.

## install

```sh
npm i @nestjs/schedule
npm i pg
npm i pg-query-stream
npm i JSONStream
```

## usage

```ts
import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import pg from "pg";
import QueryStream from "pg-query-stream";
import JSONStream from "JSONStream";

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  @Cron("45 * * * * *")
  handleCron() {
    const pool = new pg.Pool();
    //pipe 1,000,000 rows to stdout without blowing up your memory usage
    pool.connect((err, client, done) => {
      if (err) {
        pool.end();
        throw err;
      }
      const query = new QueryStream("SELECT * FROM generate_series(0, $1) num", [1000000]);
      const stream = client.query(query);
      //release the client when the stream is finished
      stream.on("end", () => {
        done();
        pool.end();
      });
      stream.pipe(JSONStream.stringify()).pipe(process.stdout);
    });
  }
}
```
