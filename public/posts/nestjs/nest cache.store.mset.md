# nest cache keys

```ts
this.cache.set("entities:1", { id: 1, name: "John" });
this.cache.set("entities:2", { id: 2, name: "Jane" });
this.cache.set("entities:3", { id: 3, name: "Jack" });

const keys = this.cache.keys("entities:*"); // ["entities:1", "entities:2", ...]

const entities = this.cache.mget(keys); // [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, ...]
```
