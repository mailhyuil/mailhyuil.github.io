# nodejs module multicore child_process

> 자식 프로세스를 생성하고 통신할 수 있는 모듈

## spawn

> 자식 프로세스를 생성
>
> > 데이터가 크고 오래가는 프로세스를 생성할 때 적합 (stream으로 작동 및 리턴(stdout, stderr))
> >
> > > 쉘 프로세스를 거치지 않고 명령어를 직접 실행 (성능 향상, 보안 강화, 더 강력한 명령어 사용)

```ts
/// spawn(command, [args], [options]);

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
> > 쉘 프로세스를 거치기 때문에 명령어를 직접 실행하는 것보다 느림
> >
> > 대신 쉘의 기능을 사용할 수 있으며, 명령을 보다 자유롭게 조작할 수 있습니다. (파이프, 리다이렉션 등)
> >
> > > 데이터가 작을 때 적합 (buffer로 작동 및 리턴)

```js
/// exec(command, callback);

const { exec } = require("child_process");

exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
```

## fork

> create multiple workers, running on the exact same Node code base
>
> > 부모 자식 간 메시지를 주고받을 수 있음
> >
> > > 메시지를 주고받을 때 (json, xml ...)

```js
/// parent.js
const { fork } = require("child_process");

const forked = fork("child.js");

forked.on("message", (msg) => {
  console.log("Message from child", msg);
});

forked.send({ hello: "world" });
```

```js
/// child.js
process.on("message", (msg) => {
  console.log("Message from parent:", msg);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);
```
