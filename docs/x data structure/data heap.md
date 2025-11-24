# data Heap

- **완전 이진 트리**를 기반으로 하여, **최대 힙** 또는 **최소 힙**의 속성을 만족하는 트리 구조의 자료구조
- 항상 최솟값 또는 최댓값을 루트에서 빠르게 꺼낼 수 있음
- queue에 우선순위가 있다면 heap이라고 생각할 수 있음

## Heapify

- 배열이나 트리의 한 부분을 힙 특성(Min Heap / Max Heap)으로 맞추는 과정

1. 원소가 삽입되면 부모로 거슬러 올라가며(상향식) 부모보다 자신이 더 작은 경우 교체
2. 원소가 삭제되면 가장 마지막에 위치하는 데이터를 루트로 교체 -> 1번을 반복

## 최대 힙 (maxHeap)

- 값이 가장 큰 원소부터 추출

## 최소 힙 (minHeap)

- 값이 가장 작은 원소부터 추출

```js
// 공통 기반 Heap 클래스
class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare; // 비교 함수: minHeap이면 (a,b)=>a-b, maxHeap이면 (a,b)=>b-a
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.size() > 0) {
      this.data[0] = last;
      this._heapifyDown();
    }
    return top;
  }

  _heapifyUp() {
    let idx = this.size() - 1;
    const val = this.data[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.compare(val, this.data[parentIdx]) >= 0) break;
      this.data[idx] = this.data[parentIdx];
      idx = parentIdx;
    }
    this.data[idx] = val;
  }

  _heapifyDown() {
    let idx = 0;
    const len = this.size();
    const val = this.data[0];
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let swapIdx = idx;

      if (left < len && this.compare(this.data[left], this.data[swapIdx]) < 0) swapIdx = left;
      if (right < len && this.compare(this.data[right], this.data[swapIdx]) < 0) swapIdx = right;

      if (swapIdx === idx) break;
      this.data[idx] = this.data[swapIdx];
      idx = swapIdx;
    }
    this.data[idx] = val;
  }
}

// MinHeap
class MinHeap extends Heap {
  constructor() {
    super((a, b) => a - b);
  }
}

// MaxHeap
class MaxHeap extends Heap {
  constructor() {
    super((a, b) => b - a);
  }
}

// 테스트
const minHeap = new MinHeap();
minHeap.push(5);
minHeap.push(2);
minHeap.push(8);
console.log(minHeap.pop()); // 2
console.log(minHeap.pop()); // 5

const maxHeap = new MaxHeap();
maxHeap.push(5);
maxHeap.push(2);
maxHeap.push(8);
console.log(maxHeap.pop()); // 8
console.log(maxHeap.pop()); // 5
```
