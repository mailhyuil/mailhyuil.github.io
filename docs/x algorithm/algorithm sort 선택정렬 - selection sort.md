# algorithm sort 선택정렬 - selection sort

start부터 뒤에 있는 모든 요소를 선형탐색하여 가장 작은 요소를 찾은 후 start와 스와프 그리고 이것을 반복한다.

```js
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  const newArr = [...arr];
  for (let start = 0; start < newArr.length; start++) {
    let minIndex = start;
    for (let cur = start + 1; cur < newArr.length; cur++) {
      if (newArr[minIndex] > newArr[cur]) {
        minIndex = cur;
      }
    }
    swap(newArr, start, minIndex);
  }
  return newArr;
}

const arr = [1, 3, 24, 3, 24, 2, 3, 5, 1];
console.log(selectionSort(arr));
```
