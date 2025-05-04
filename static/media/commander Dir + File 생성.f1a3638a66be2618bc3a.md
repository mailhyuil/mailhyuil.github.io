# commander Dir + File 생성

```ts
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const program = new Command();

program
  .version("1.0.0")
  .description("Custom NestJS project initializer")
  .action(() => {
    const rootPath = __dirname;
    const repositoryPath = "";
    // guards 폴더 생성
    const guardsPath = path.join(rootPath, "guards");
    if (!fs.existsSync(guardsPath)) {
      fs.mkdirSync(guardsPath);
    }

    // auth.guard.ts 파일을 repository Dir에서 guards 폴더로 복사
    fs.copyFileSync(path.join(repositoryPath, "guards", "auth.guard.ts"), path.join(guardsPath, "auth.guard.ts"));
  });

program.parse();
```
