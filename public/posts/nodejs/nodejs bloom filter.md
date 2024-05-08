# nodejs bloom filter

## install

```sh
npm i bloom-filters
```

## usage

```js
const { BloomFilter } = require("bloom-filters");
// create a Bloom Filter with a size of 10 and 4 hash functions
let filter = new BloomFilter(10, 4);
// insert data
filter.add("alice");
filter.add("bob");

// lookup for some data
console.log(filter.has("bob")); // output: true
console.log(filter.has("daniel")); // output: false

// print the error rate
console.log(filter.rate());

// alternatively, create a bloom filter optimal for a number of items and a desired error rate
const items = ["alice", "bob"];
const errorRate = 0.04; // 4 % error rate
filter = BloomFilter.create(items.length, errorRate);

// or create a bloom filter optimal for a collections of items and a desired error rate
filter = BloomFilter.from(items, errorRate);
```
