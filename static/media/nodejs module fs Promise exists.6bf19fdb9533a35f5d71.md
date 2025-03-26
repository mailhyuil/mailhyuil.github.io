# nodejs fs promise exists

> fs를 callback이 아닌 promise로 사용할 수 있다.

```js
import fs from "fs/promises";

const exists = async path => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};
```
