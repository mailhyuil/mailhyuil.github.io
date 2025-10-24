# Structural proxy

> 객체의 행동을 대신 수행해 줌
>
> > 행동에 다른 로직을 추가해서 행동시킬 수 있음
> >
> > > 이미 있는 readonly 객체에 새로운 기능을 추가할 수 있음

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

## 구조

```ts
// Define the RealSubject class
class RealSubject {
  doSomething() {
    console.log("RealSubject is doing something.");
  }
}

// Define the Proxy class
class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  doSomething() {
    console.log("Proxy is doing something before calling RealSubject.");
    this.realSubject.doSomething();
    console.log("Proxy is doing something after calling RealSubject.");
  }
}

// Usage example
const realSubject = new RealSubject();
const proxySubject = new ProxySubject(realSubject);

// Call the method on the Proxy object
proxySubject.doSomething();
```
