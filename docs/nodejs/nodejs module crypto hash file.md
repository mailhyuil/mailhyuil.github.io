# hash-file.ts

> 파일 무결성 용도로 md5가 많이 사용된다.

```ts
import crypto from "crypto";

export function hashFile(file: Express.Multer.File) {
  const fileBuffer = file.buffer;

  const hashSum = crypto.createHash("md5");

  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");

  return hex;
}
```
