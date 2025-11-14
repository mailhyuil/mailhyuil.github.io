# algorithm sort 병합정렬 - merge sort

> 가장 많이 사용되는 정렬
>
> > 데이터가 많을 수록 좋은 알고리즘
> >
> > > 시간복잡도 O(logN)
> > >
> > > > 분할 정복 알고리즘 중 하나

```js
function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) sorted.push(left[i++]);
    else sorted.push(right[j++]);
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [7, 4, 3, 2, 1, 6, 5];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7]
```
