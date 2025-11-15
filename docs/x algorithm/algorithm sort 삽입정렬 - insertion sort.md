# algorithm sort 삽입정렬 - insertion sort

cur 값을 왼쪽으로 이동시키며 자기보다 작은 값을 만나면 그 위치에서 멈춘다.

- 이미 어느정도 정렬이 되어있는 상태에서는 매우 빠르게 동작 (O(N))
- 첫번째 값은 정렬이 된 상태로 간주하고 skip 한다.
- In-Place Algorithm으로 공간복잡도가 낮다. (공간복잡도 O(1))

```js
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {
  const newArr = [...arr];
  // 첫번째 값은 skip
  for (let i = 1; i < newArr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (newArr[j] < newArr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        swap(newArr, j, j - 1);
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
  return newArr;
}

const arr = [3, 4, 3, 42, 34, 23, 4, 1, 35, 13, 1, 34];
console.log(insertionSort(arr)); // [1, 1, 3, 3, 4, 4, 13, 23, 34, 34, 35, 42]
```
