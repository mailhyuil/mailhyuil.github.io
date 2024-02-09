# lodash groupBy

```js
_.groupBy(collection, [method or property]);

_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(["one", "two", "three"], "length");
// => { '3': ['one', 'two'], '5': ['three'] }
```
