# nodejs child_process

> 자식 프로세스를 생성하고 통신할 수 있는 모듈

## spawn

> 자식 프로세스를 생성
>
> > 데이터가 크고 오래가는 프로세스를 생성할 때 적합 (stream)
> >
> > > 쉘 프로세스를 거치지 않고 명령어를 직접 실행 (성능 향상, 보안 강화, 더 강력한 명령어 사용)

```ts
const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
```

## exec

> 자식 프로세스를 생성
>
> > 쉘 프로세스를 거치기 때문에 쉘 스크립트 사용 가능
> >
> > > 데이터가 작을 때 적합

## fork

> create multiple workers, running on the exact same Node code base
>
> > 부모 자식 간 메시지를 주고받을 수 있음
> >
> > > 메시지를 주고받을 때 (json, xml ...)
