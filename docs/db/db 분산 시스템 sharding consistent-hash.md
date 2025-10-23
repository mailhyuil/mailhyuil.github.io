# db sharding consistent-hash

> 노드의 수가 3개인 경우 hashFunc(key) % 3 으로 노드를 선택하여 요청
>
> 만약 노드의 수가 늘어나면 hashFunc(key) % 4로 기존에 선택하던 노드가 바뀔 수 있음
>
> > 이를 방지하기 위해 consistent-hash는 hash ring이라는 개념을 사용하여 노드를 선택

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
