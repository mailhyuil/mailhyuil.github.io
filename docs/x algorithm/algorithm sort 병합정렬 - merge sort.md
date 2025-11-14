# algorithm sort 병합정렬 - merge sort

> 가장 많이 사용되는 정렬
>
> > 데이터가 많을 수록 좋은 알고리즘
> >
> > > 시간복잡도 O(logN)
> > >
> > > > 분할 정복 알고리즘 중 하나

```js
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없다.
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];

  // 정렬
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
  return [...sortedArr, ...left, ...right];
}

const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(arr); // [7, 4, 3, 2, 1, 6, 5]
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7]
```
