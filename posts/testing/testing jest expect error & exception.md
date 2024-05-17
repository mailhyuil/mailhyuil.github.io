# testing jest expect error & exception

```js
await service.findById("wrong").catch((e) => {
  expect(e).toBeInstanceOf(NotFoundException);
});
```
