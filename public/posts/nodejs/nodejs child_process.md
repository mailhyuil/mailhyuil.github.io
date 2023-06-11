# nodejs child_process

> 자식 프로세스를 생성하고 통신할 수 있는 모듈

## spawn

> nodejs에서는 자식프로세스를 생성하는 함수

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
