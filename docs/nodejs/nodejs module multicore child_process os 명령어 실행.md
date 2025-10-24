# nodejs module multicore child_process os 명령어 실행

```ts
const { exec } = require("child_process");

// Docker 명령어 실행 함수
function runDockerCommand(command) {
  return new Promise((resolve, reject) => {
    // `echo "${password}" | sudo -S ${command}` // root 권한이 필요한 경우
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        reject(error);
      } else {
        console.log(`Command output: ${stdout}`);
        resolve(stdout);
      }
    });
  });
}

// Express route에서 도커 명령어 실행
app.get("/rundocker", async (req, res) => {
  try {
    const commandOutput = await runDockerCommand("docker ps");
    res.send(`Docker PS output: ${commandOutput}`);
  } catch (error) {
    res.status(500).send("Error executing Docker command");
  }
});
```
