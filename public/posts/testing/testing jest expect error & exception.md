# testing jest expect error & exception

```js
// sync
expect(service.findById("wrong")).toThrow(NotFoundException);

// async
expect(service.findById("wrong")).rejects.toThrow(NotFoundException);
```
