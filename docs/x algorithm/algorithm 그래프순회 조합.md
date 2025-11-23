# algorithm 그래프순회 조합

서로 다른 n개의 수 중에 r개를 선택하는 경우의 수

```txt
nCr = n! / (n-r)! * r!
```

## example

```js
function combine(n, k) {
  const res = [];
  const path = [];

  function dfs(start) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1); // 다음 숫자 선택
      path.pop();
    }
  }

  dfs(1);
  return res;
}

console.log(combine(4, 2));
// [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```
