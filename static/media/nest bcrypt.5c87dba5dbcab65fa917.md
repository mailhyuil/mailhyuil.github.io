# nest bcyrpt

## install

```bash
# nodejs, node-gyp, python 2.x/3.x, openssl 필요
# windows는 Visual Studio Build Tools 설치 필요
# 자체 thread를 생성하여 os 레벨에서 연산하여 성능이 좋다.
npm i bcrypt
npm i -D @types/bcrypt

# c++ 의존성이 없다.
# 브라우저에서도 사용 가능
# main thread에서 연산 (background thread 사용 안함, 브라우저에는 crypto 등의 모듈이 없음)
npm i bcryptjs
npm i -D @types/bcryptjs
```

## usage

```js
import * as bcrypt from "bcrypt";

const hash = await bcrypt.hash("password", 10); // 10 = salt round // salt를 자동으로 생성한다.
await bcrypt.compare("password", hash);
```
