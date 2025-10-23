# bubble sort (버블 정렬)

```js
const arr = [3, 4, 3, 42, 34, 23, 4, 1, 35, 13, 1, 34];

for (let i = arr.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
```
