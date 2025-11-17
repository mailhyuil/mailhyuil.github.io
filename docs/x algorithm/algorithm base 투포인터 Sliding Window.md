# algorithm 투포인터 Sliding Window

- **연속된 값**을 효율적으로 다루는 알고리즘
- Fixed Window: 윈도우가 고정된 크기를 유지하는 경우
- Dynamic Window: 윈도우가 동적으로 변경되는 경우

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

> [1,[2,3,4],5,6] // [2,3,4] 가 윈도우
>
> > 1초마다 윈도우를 이동시키면서 윈도우에 포함된 요소의 개수를 세는 방식
> >
> > > 투포인터 사용

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
function slidingWindow(n, arr) {
  let res = 0;
  let sum = 0;

  // 앞의 n개 더하기
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  res = sum;

  // 슬라이딩 윈도
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    res = Math.max(res, sum);
  }

  return res;
}

console.log(slidingWindow(2, [7, 6, 5, 4, 3, 2, 1]));
```

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
