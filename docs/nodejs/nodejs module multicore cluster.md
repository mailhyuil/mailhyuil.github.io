# nodejs module multicore cluster

> multi processing을 구현
>
> > 각 코어에 process를 생성
> >
> > > child_process로 구현되었음
> > >
> > > > nodejs 앱 자체를 멀티코어에서 실행하는 것

## usage

> cluster.fork()로 worker process생성
>
> > 작업관리자로 확인해보면 두개의 프로세스가 생성된 것을 확인할 수 있습니다.
> >
> > > 두개의 프로세스는 동시에 작업을 수행합니다.

```js
const cluster = require("cluster");
const process = require("process");

if (cluster.isPrimary) {
  // 마스터 프로세스
  console.log(`Main ${process.pid} is running`);
  cluster.fork(); // worker 생성
  for (let i = 0; i < 1000000; i++) {
    console.log("i'm a main! nice to meet you!");
  }
} else {
  // 워커 프로세스
  console.log(`Worker ${process.pid} started`);
  for (let i = 0; i < 1000000; i++) {
    console.log("i'm a worker! nice to meet you!");
  }
}
```

## 스케줄링 정책

```js
const cluster = require("cluster");

cluster.schedulingPolicy = cluster.SCHED_NONE; // 스케줄링 정책을 수동으로 설정
// cluster.schedulingPolicy = cluster.SCHED_RR; // 스케줄링 정책을 라운드 로빈으로 설정

cluster.on("online", (worker) => {
  console.log("online worker 아이디", worker.id);
});

cluster.on("exit", function (worker, code, signal) {
  console.log("죽은 워커의 아이디 : " + worker.process.pid);
  console.log("죽은 워커의 exit code : " + code);
  console.log("죽은 워커의 signal : " + signal);
});

if (cluster.isMaster) {
  console.log("I am master");
  cluster.fork(); // worker 생성
  cluster.fork(); // worker 생성
  cluster.fork(); // worker 생성
  cluster.fork(); // worker 생성
} else if (cluster.isWorker) {
  console.log("I am worker");
}
```
