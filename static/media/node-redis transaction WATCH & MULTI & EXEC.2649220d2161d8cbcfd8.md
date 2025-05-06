# node-redis transaction WATCH & MULTI & EXEC

```js
client.executeIsolated(async (isolatedClient) => {
  await isolatedClient.watch("color");

  if (!isValid) {
    throw new Error("validation failed");
  }

  return isolatedClient
    .multi()
    .rPush("color", "red")
    .hSet("key", {
      field: "value",
    })
    .exec();
});
```
