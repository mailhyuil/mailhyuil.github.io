# algorithm 그래프순회 순열

> 서로 다른 n개의 수 중에 r개를 선택하여 나열하는 경우의 수
>
> > nPr = n \* n-1 \* n-2 ... \* n-r+1

## example

```js
function permutation(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = permutation(rest, selectNumber - 1);
    const attached = combinations.map(combination => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

console.log(permutation([1, 2, 3], 2));
```
