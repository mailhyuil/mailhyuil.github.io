# testing jest expect error & exception

```js
// common
try {
  service.findById("wrong");
} catch (error) {
  expect(error).toBeInstanceOf(NotFoundException);
  expect(error.message).toBe("Not found");
}

// sync
expect(() => service.findById("wrong")).toThrow(NotFoundException);

// async
expect(service.findById("wrong")).rejects.toThrow(NotFoundException);
```
