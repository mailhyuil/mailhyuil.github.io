# hash-file.ts

```ts
import crypto from "crypto";
export function hashFile(file: Express.Multer.File) {
  const fileBuffer = file.buffer;

  const hashSum = crypto.createHash("sha256");

  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");

  return hex;
}
```
