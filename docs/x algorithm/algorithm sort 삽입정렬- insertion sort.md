# algorithm sort 삽입정렬- insertion sort

> 선택 정렬, 버블 정렬보다 빠르다.
>
> > 이미 어느정도 정렬이 되어있는 상태에서는 매우 빠르게 동작
> >
> > > j의 왼쪽은 항상 정렬이 된 상태이다!

```js
// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}
```
