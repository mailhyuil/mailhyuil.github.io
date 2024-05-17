# js Proxy

> 이미 있는 readonly 객체에 새로운 기능을 추가할 수 있음

```js
type Client = typeof client;

const buildClientProxy = (timeoutMs: number) => {
	const startTime = Date.now();

	const handler = {
		get(target: Client, prop: keyof Client) {
			if (Date.now() >= startTime + timeoutMs) {
				throw new Error('Lock has expired.');
			}

			const value = target[prop];
			return typeof value === 'function' ? value.bind(target) : value;
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
