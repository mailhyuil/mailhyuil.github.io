# Linked List

> LinkedList도 일종의 Graph 자료구조다. (단순 연결 리스트(Singly Linked List))

## js object로 linked list 구현하기

> Node는 next를 가지고 있고, next는 다음 Node를 가리킨다.
>
> > LinkedList는 head를 가지고 있고, head는 처음으로 연결된 Node를 가리킨다.
> >
> > > LinkedList도 일종의 Graph 자료구조다.

```js
const linkedList = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

console.log(linkedList.head.next.next.value);
```

## js class로 linked list 구현하기

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head.value;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode.value;
  }
}

const node1 = new Node(2);
const node2 = new Node(5);
node1.next = node2;

const linkedList = new LinkedList(node1);
console.log(linkedList.size());
```
