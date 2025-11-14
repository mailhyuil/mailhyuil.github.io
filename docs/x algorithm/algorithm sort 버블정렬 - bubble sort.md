# algorithm sort 버블정렬 - bubble sort

```js
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  const newArr = [...arr];
  for (let start = 0; start < newArr.length - 1; start++) {
    for (let cur = 0; cur < newArr.length - 1 - start; cur++) {
      if (newArr[cur] > newArr[cur + 1]) {
        swap(newArr, cur, cur + 1);
      }
    }
  }
  return newArr;
}

const arr = [3, 4, 3, 42, 34, 23, 4, 1, 35, 13, 1, 34];
console.log(bubbleSort(arr)); // [1, 1, 3, 3, 4, 4, 13, 23, 34, 34, 35, 42]
```
