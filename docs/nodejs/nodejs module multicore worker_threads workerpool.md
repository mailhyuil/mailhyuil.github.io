# nodejs module multicore worker_threads workerpool

> worker를 재사용 가능한 pool로 관리해주는 라이브러리
>
> > web 환경에서는 WebWorker, nodejs 환경에서는 worker_threads를 사용해준다.

## install

```sh
npm i workerpool
```

## usage

```ts
import { pool } from "workerpool";

const workerPool = pool();

const res = await workerPool
  .exec(
    (a, b) => {
      return a + b;
    },
    [2, 4],
  )
  .catch(function (err) {
    console.error(err);
  });

console.log(res);
```
