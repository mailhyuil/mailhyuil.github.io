# algorithm js queue

> linked list로 구현하면 삽입과 삭제에 O(1)
>
> > head와 tail 두개의 포인터를 가진다
> >
> > > head 먼저 들어온 데이터
> > >
> > > > tail 마지막에 들어온 데이터

## 구현

> js의 object를 이용해서 구현

```js
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
}
```
