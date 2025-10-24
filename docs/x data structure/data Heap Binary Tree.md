# data Heap Binary Tree

> 최솟값 혹은 최댓값을 빠르게 찾아내는 자료구조
>
> > 완전 이진트리를 사용
> >
> > > 삽입, 삭제에 O(logN)

## 최대 힙

> 값이 가장 큰 원소부터 추출

## 최소 힙

> 값이 가장 작은 원소부터 추출

## heapify

> 최대힙, 최소힙을 만드는 과정

1. 원소가 삽입되면 부모로 거슬러 올라가며(상향식) 부모보다 자신이 더 작은 경우 교체
2. 원소가 삭제되면 가장 마지막에 위치하는 데이터를 루트로 교체 -> 1번을 반복

## 구현

```js
export class PriorityQueue {
  constructor(comparator) {
    this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
    this._elements = [];
  }

  static DEFAULT_COMPARATOR(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      a = a.toString();
      b = b.toString();

      if (a == b) return 0;

      return a > b ? 1 : -1;
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (this.isEmpty()) throw new Error("PriorityQueue is empty");

    return this._elements[0];
  }

  deq() {
    const first = this.peek();
    const last = this._elements.pop();
    const size = this.size();

    if (size === 0) return first;

    this._elements[0] = last;
    let current = 0;

    while (current < size) {
      let largest = current;
      const left = 2 * current + 1;
      const right = 2 * current + 2;

      if (left < size && this.#compare(left, largest) >= 0) {
        largest = left;
      }

      if (right < size && this.#compare(right, largest) >= 0) {
        largest = right;
      }

      if (largest === current) break;

      this.#swap(largest, current);
      current = largest;
    }

    return first;
  }

  enq(element) {
    const size = this._elements.push(element);
    let current = size - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.#compare(current, parent) <= 0) break;

      this.#swap(parent, current);
      current = parent;
    }

    return size;
  }

  size() {
    return this._elements.length;
  }

  forEach(fn) {
    return this._elements.forEach(fn);
  }

  #compare(a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
  }

  #swap(a, b) {
    const aux = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = aux;
  }
}
```
