# nest bcyrpt

## install

```bash
# c++ 의존성이 있다.
npm i bcrypt
npm i -D @types/bcrypt

# c++ 의존성이 없다.
npm i bcryptjs
npm i -D @types/bcryptjs
```

## usage법

```js
import * as bcrypt from "bcrypt";

const hash = await bcrypt.hash("password", 10); // 10 = salt round // salt를 자동으로 생성한다.
await bcrypt.compare("password", hash);
```
