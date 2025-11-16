# data queue

## js Array로 구현

- js array의 shift를 사용하면 O(n)이지만 headIndex로 접근하여 O(1)로 구현 가능
- 배열 앞부분이 안 쓰이는 공간이 되지만, V8 엔진은 head 포인터 증가를 매우 잘 처리해서 메모리 누수 거의 없음.

```js
class Queue {
  private arr: any[] = [];
  private head = 0;

  enqueue(value: any) {
    this.arr.push(value);       // O(1)
  }

  dequeue() {
    if (this.head >= this.arr.length) return null;
    return this.arr[this.head++]; // O(1)
  }

  peek() {
    return this.arr[this.head];
  }

  get length() {
    return this.arr.length - this.head;
  }
}
```
