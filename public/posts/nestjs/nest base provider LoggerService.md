# nest LoggerService

## 구현

```ts
import { LoggerService } from "@nestjs/common";
import * as fs from "fs";

export class EmojiLogger implements LoggerService {
  log(message: string) {
    this.writeToFile("📢 " + message);
  }

  error(message: string, trace: string) {
    this.writeToFile("❌ " + message);
    this.writeToFile("🔍 Stack Trace: " + trace);
  }

  warn(message: string) {
    this.writeToFile("⚠️ " + message);
  }

  debug(message: string) {
    this.writeToFile("🐞 " + message);
  }

  private writeToFile(message: string) {
    const logFilePath = "log.txt";

    fs.appendFile(logFilePath, message + "\n", (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
    });
  }
}
```

## main.ts

```ts
const app = await NestFactory.create(AppModule, {
  logger: new EmojiLogger(),
});
```
