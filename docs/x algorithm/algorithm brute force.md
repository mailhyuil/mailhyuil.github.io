# algorithm brute force

- 모든 경우의 수를 탐색하는 알고리즘
- 입력크기가 작은 경우 적합할 수 있다.
- **백트래킹**, **DFS**, **비트마스크** 등등 모든 경우의 수를 탐색하는 알고리즘은 브루트 포스의 일종이다.

## example

```js
function bruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
