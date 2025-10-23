# nodejs uuid

## install

```sh
# uuid
npm i uuid
# shortid
npm i shortid
```

## uuid version

> v4와 v1이 많이 사용된다.

```sh
v1: 타임스탬프(시간) 기준
v2: 타입스탬프 + DCE 보안
v3: MD5 해시 기준
v4: 랜덤값 기반
v5: SHA-1 해시 기준

import { v4 as uuidv4 } from 'uuid';
```
