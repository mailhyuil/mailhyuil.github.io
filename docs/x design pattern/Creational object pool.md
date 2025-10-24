# Creational object pool

> js에서는 기본으로 프로토타입 패턴을 사용하기 때문에 필요없다.

```js
// Define the object to be pooled
function PooledObject() {
  // Initialize the object
  this.property1 = null;
  this.property2 = null;
  // ...
}

// Create the object pool
const objectPool = {
  pool: [],
  maxSize: 10,
  get: function () {
    // If there are no objects in the pool, create a new one
    if (this.pool.length == 0) {
      return new PooledObject();
    } else {
      // Otherwise, return the next available object
      return this.pool.shift();
    }
  },
  release: function (obj) {
    // Reset the object properties
    obj.property1 = null;
    obj.property2 = null;
    // ...
    // If the pool is not full, add the object back to the pool
    if (this.pool.length < this.maxSize) {
      this.pool.push(obj);
    }
  },
};

// Use the object pool
const obj1 = objectPool.get();
obj1.property1 = "Hello";
obj1.property2 = "World";
// ...
objectPool.release(obj1);

const obj2 = objectPool.get();
// obj2 will be the same as obj1
```
