# nest response onclose

```js
import { Response } from "express";

export class AppController {
  @Get()
  getHello(@Res({ passthrough: true }) res: Response): string {
    res.on("close", () => {
      console.log("connection closed");
    });
  }
}
```
