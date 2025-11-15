# algorithm 그래프순회 순열

> 서로 다른 n개의 수 중에 r개를 선택하여 나열하는 경우의 수
>
> > nPr = n \* n-1 \* n-2 ... \* n-r+1

## example

```js
function permute(nums) {
  const result = [];
  const used = Array(nums.length).fill(false);

  function dfs(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);

      dfs(path);

      path.pop();
      used[i] = false;
    }
  }

  dfs([]);
  return result;
}
```
