# db sharding consistent-hash

> consistent hashing을 사용하여 데이터베이스의 테이블을 여러 서버에 분산시키는 방법

## install

```sh
npm i consistent-hash
```

## usage

```js
const ConsistentHash = require("consistent-hash");
const hashRing = new ConsistentHash(["5432", "5433", "5434"]);

const entityId = "1234"; // sharding key
const hash = crypto.createHash("md5").update(entityId).digest("hex");
const server = hashRing.get(hash.slice(0, 5));
```
