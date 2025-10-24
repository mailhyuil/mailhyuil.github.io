# data priority queue

> 우선순위를 기준으로 데이터를 추출하는 자료구조
>
> > 최대 힙 자료구조를 통해서 구현
> >
> > > 힙이 큐가 인큐(Enqueue), 디큐(dequeue)를 할 때 보조하는 역할

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
