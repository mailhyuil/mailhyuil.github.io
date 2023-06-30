# Window

## Fixed Window Counter

> express-rate-limit

```js
class FixedWindowCounter {
  constructor(maxRequestPerSec, windowSizeInMs) {
    this.windows = new Map();
    this.maxRequestPerSec = maxRequestPerSec;
    this.windowSizeInMs = windowSizeInMs;
  }

  allow() {
    const windowKey = Math.floor(Date.now() / this.windowSizeInMs);
    if (!this.windows.has(windowKey)) {
      this.windows.set(windowKey, new AtomicInteger(0));
    }
    return this.windows.get(windowKey).incrementAndGet() <= this.maxRequestPerSec;
  }

  toString() {
    let sb = "";
    for (const [windowKey, atomicInteger] of this.windows.entries()) {
      sb += windowKey + " --> " + atomicInteger + "\n";
    }
    return sb;
  }
}

class AtomicInteger {
  constructor(value) {
    this.value = value || 0;
  }

  incrementAndGet() {
    return ++this.value;
  }

  toString() {
    return this.value.toString();
  }
}
```

## Sliding Window Log

```js
class SlidingWindowLog {
  constructor(maxRequestPerSec) {
    this.windowLog = [];
    this.maxRequestPerSec = maxRequestPerSec;
  }

  allow() {
    const now = Date.now();
    const boundary = now - 1000;
    while (this.windowLog.length > 0 && this.windowLog[0] <= boundary) {
      this.windowLog.shift();
    }
    this.windowLog.push(now);
    console.log(`current time=${now}, log size=${this.windowLog.length}`);
    return this.windowLog.length <= this.maxRequestPerSec;
  }
}
```

## Sliding Window Counter

```js
class SlidingWindow {
  constructor(maxRequestPerSec, windowSizeInMs) {
    this.windows = new Map();
    this.maxRequestPerSec = maxRequestPerSec;
    this.windowSizeInMs = windowSizeInMs;
  }

  allow() {
    const now = Date.now();
    const curWindowKey = Math.floor(now / this.windowSizeInMs);
    if (!this.windows.has(curWindowKey)) {
      this.windows.set(curWindowKey, new AtomicInteger(0));
    }
    const preWindowKey = curWindowKey - 1000;
    const preCount = this.windows.get(preWindowKey);
    if (preCount === undefined) {
      return this.windows.get(curWindowKey).incrementAndGet() <= this.maxRequestPerSec;
    }
    const preWeight = 1 - (now - curWindowKey * this.windowSizeInMs) / 1000.0;
    const count = Math.floor(preCount.get() * preWeight + this.windows.get(curWindowKey).incrementAndGet());
    return count <= this.maxRequestPerSec;
  }
}

class AtomicInteger {
  constructor(value) {
    this.value = value || 0;
  }

  incrementAndGet() {
    return ++this.value;
  }

  get() {
    return this.value;
  }
}
```
