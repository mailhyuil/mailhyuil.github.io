# 재귀 구조

> 탈출조건에 다가가기 위한 연산
>
> > 탈출조건에서 풀려놨을 때 수행할 연산
> >
> > > 두연산은 내부 재귀함수 호출 전과 후로 나뉜다.
> > >
> > > > 최소 값만 가지고 있다면 정말 쉽게 답을 구할 수 있는가???

```js
const data = 'hello';

recursive(_data: string): string {
  if (_data.length < 1) return '';
  return this.recursive(_data.substring(1)) + _data.charAt(0);
}

console.log(recursive(data));
```

## 탈출조건에 다가가기 위한 연산과 탈출조건에서 풀려놨을 때 수행할 연산

```js
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // 여기까지는 탈출조건에 다가가기 위한 연산
  return merge(mergeSort(left), mergeSort(right));
}

// 탈출 조건에서 풀려놨을 때 수행할 연산 merge()
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(arr); //[7, 4, 3, 2, 1, 6, 5]
console.log(sortedArray); //[1, 2, 3, 4,5, 6, 7]
```
