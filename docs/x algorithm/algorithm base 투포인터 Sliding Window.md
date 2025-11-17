# algorithm base 투포인터 Sliding Window

- **연속된 값**을 효율적으로 다루는 알고리즘
- Fixed Window: 윈도우가 고정된 크기를 유지하는 경우
- Dynamic Window: 윈도우가 동적으로 변경되는 경우

## Fixed Window

```js
function maxSubarraySum(arr, window) {
  if (!arr.length) return false;
  if (arr.length < window) return null;

  let sum = 0;

  for (let i = 0; i < window; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  let start = window;

  while (start < arr.length) {
    sum = sum + arr[start] - arr[start - window];
    if (sum > maxSum) {
      maxSum = sum;
    }
    start++;
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 3));
```

## Dynamic Window

```js
function findLongestSubstring(str) {
  const seen = {}; // 각 문자 마지막 인덱스 저장
  let start = 0; // 현재 윈도우의 시작 인덱스
  let maxLen = 0; // 지금까지 찾은 최대 길이

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];

    // end pointer가 가리키는 글자가 seen 안에 있고 윈도우(start-end) 안에 있다면 endChar은 새로운 중복된 글자라는 것
    if (seen[endChar] >= start) {
      // start를 중복아 안되는 지점으로 이동
      start = seen[endChar] + 1;
    }

    // 현재 문자 위치 갱신
    seen[endChar] = end;

    // 윈도우 길이 갱신
    const windowLen = end - start + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}

console.log(findLongestSubstring("itisawesome"));
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
