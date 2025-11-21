# algorithm base 기법

## start < end

- 투포인터
- Palindrome 문제

```js
let start = 0;
let end = arr.length - 1;
while (start < end) {}
```

## for and while

- 투포인터
- 슬라이딩 윈도우
- Subarray, Substring 문제

```js
let start = 0;
for (let end = 0; end < arr.length; end++) {
  while (start < end) {
    start++;
  }
}
```

## for + Math.max/min

- Kadane's Algorithm
- 연속된 subarray 중에서 최대 합을 찾는 알고리즘.

```js
let cur = arr[0];
let best = arr[0];

for (let i = 1; i < arr.length; i++) {
  cur = Math.max(arr[i], cur + arr[i]);
  best = Math.max(best, cur);
}
```

## start <= end

- 이진탐색

```js
let start = 0;
let end = arr.length - 1;
while (start <= end) {
  const mid = Math.floor((start + end) / 2);
}
```

## i < left.length && j < right.length

- Merge
- Subsequence

```js
while (i < left.length && j < right.length) {}
```

## for and for (브루트포스)

```js
for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      // do something
    }
  }
}
```

## for and for (DP)

- bottom-up DP 문제
- Triangle Sum

```js
for (let row = arr.length - 1; row >= 0; row--) {
  for (let col = 0; col < arr[row].length; col++) {
    dp[col] = Math.min(dp[col], dp[col + 1]) + arr[row][col];
  }
}
```

## 재귀

- DFS
- Subset, Combination, Permutation

```js
const res = [];
const path = [];
function dfs(start: number, remain: number) {
  if (remain === 0) {
    res.push([...path]);
    return;
  }
  if (remain < 0) return;

  for (let i = start; i < candidates.length; i++) {
    path.push(candidates[i]); // select
    dfs(i, remain - candidates[i]); // i 그대로면 같은 수 또 사용 가능
    path.pop(); // backtracking
  }
}
```

## while(queue.length)

- BFS

```js
const q: [number, number][] = [];
q.push([sr, sc]);
visited[sr][sc] = true;

while (q.length) {
  const [r, c] = q.shift()!;
  for (const [dr, dc] of dirs) {
    const nr = r + dr;
    const nc = c + dc;
    // 범위/방문 체크 후 q.push
  }
}
```

## stack + for and while

- monotonic stack: 조건에 맞지 않으면 pop
- 주어진 배열에서 i 다음으로 큰 수를 찾는 알고리즘.

```js
const next = Array(nums.length).fill(-1);
const stack: number[] = []; // 인덱스 저장

for (let i = 0; i < nums.length; i++) {
  while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
    const idx = stack.pop()!;
    next[idx] = nums[i];
  }
  stack.push(i);
}
```
