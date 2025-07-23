# cache pattern

## no-caching

## cache-aside

## cache-through

```ts
class Cache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  remove(key) {
    delete this.cache[key];
  }
}

// Example usage
const cache = new Cache();
cache.set("foo", "bar");
console.log(cache.get("foo")); // Output: 'bar'
cache.remove("foo");
console.log(cache.get("foo")); // Output: undefined
```
