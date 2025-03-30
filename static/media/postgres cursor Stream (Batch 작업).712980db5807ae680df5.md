# postgres Stream (Batch 작업)

> query해야하는 데이터가 너무 많다면 한번에 다 조회할 경우 메모리 부족이 생길 수 있다.
>
> > 이럴 때는 cursor를 사용하여 데이터를 stream 형식으로 읽어야한다.

## install

```sh
npm i pg
npm i pg-query-stream
npm i JSONStream
```

## usage

```ts
const pg = require("pg");
const pool = new pg.Pool();
const QueryStream = require("pg-query-stream");
const JSONStream = require("JSONStream");

//pipe 1,000,000 rows to stdout without blowing up your memory usage
pool.connect((err, client, done) => {
  if (err) throw err;
  const query = new QueryStream("SELECT * FROM generate_series(0, $1) num", [1000000]);
  const stream = client.query(query);
  //release the client when the stream is finished
  stream.on("end", done);
  stream.pipe(JSONStream.stringify()).pipe(process.stdout);
});
```
