# js Proxy usage

> 이미 있는 readonly 객체에 새로운 기능을 추가할 수 있음

```js
type Client = typeof client;

const buildClientProxy = (timeoutMs: number) => {
	const startTime = Date.now();

	const handler = {
		get(target: Client, key: keyof Client) {
			if (Date.now() >= startTime + timeoutMs) {
				throw new Error('Lock has expired.');
			}
			const prop = Reflect.get(target, key); // target[key] 대신 Reflect.get(target, key)를 사용하면 property가 없을 때 undefined가 아닌 에러를 발생시킴
			return typeof prop === 'function' ? prop.bind(target) : prop;
		}
	};

	return new Proxy(client, handler) as Client;
};

const clientProxy = buildClientProxy(timeoutMs);

clientProxy.rPush(bidHistoryKey(attrs.itemId), serialized);
clientProxy.hSet(itemsKey(item.id), {
    bids: item.bids + 1,
    price: attrs.amount,
    highestBidUserId: attrs.userId
});
```

## 함수 뒤에 호출하기

```js
class Client {
  rPush(key: string, value: string) {
    console.log(`rPush ${key} ${value}`);
  }
  hSet(key: string, value: any) {
    console.log(`hSet ${key} ${value}`);
  }
}
const client = new Client();

const buildClientProxy = () => {
  const handler = {
    get(target: Client, key: keyof Client) {
      const prop = Reflect.get(target, key); // target[key] 대신 Reflect.get(target, key)를 사용하면 property가 없을 때 undefined가 아닌 에러를 발생시킴
      console.log("before");
      if (typeof prop === "function") {
        return function () {
          // 반드시 function을 사용 (화살표 함수 x)
          const fn = prop.bind(target)(arguments[0], arguments[1]);
          console.log("after");
          return fn;
        };
      }
      return prop;
    },
  };
  return new Proxy(client, handler) as Client;
};

const clientProxy = buildClientProxy();

clientProxy.hSet("key", "value");
clientProxy.rPush("key", "value");
```
