# data queue

## js Array로 구현

- js array의 shift를 사용하면 O(n)이지만 headIndex로 접근하여 O(1)로 구현 가능
- 배열 앞부분이 안 쓰이는 공간이 되지만, V8 엔진은 head 포인터 증가를 매우 잘 처리해서 메모리 누수 거의 없음.

```js
class Queue<T> {
  private arr: T[] = [];
  private head = 0;

  get length() {
    return this.arr.length - this.head;
  }

  enqueue(value: T) { // O(1)
    this.arr.push(value);
  }

  dequeue(): T | null { // O(1)
    if (this.isEmpty()) return null;
    return this.arr[this.head++];
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.arr[this.head];
  }

  clear() {
    this.arr = [];
    this.head = 0;
  }

  isEmpty() {
    return this.head >= this.arr.length;
  }

  compact() { // 메모리 최적화
    if (this.head > 0) {
      this.arr = this.arr.slice(this.head);
      this.head = 0;
    }
  }
}

```
