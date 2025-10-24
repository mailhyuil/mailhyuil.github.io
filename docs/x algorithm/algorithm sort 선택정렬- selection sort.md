# algorithm sort 선택정렬- selection sort

```js
const arr = [1, 3, 24, 3, 24, 2, 3, 5, 1];

for (let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  const temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr);
```
