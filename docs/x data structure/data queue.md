# data queue

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
    // 삽입 시 tailIndex를 올려줌 -> headIndex가 삽입된 item을 가르키게 된다
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    // 삭제 시 headIndex가 가르키는 item을 삭제 -> headIndex를 올려줌 -> headIndex가 그 다음 item을 가르키게 된다
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
