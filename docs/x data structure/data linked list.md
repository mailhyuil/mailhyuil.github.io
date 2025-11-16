# data linked list

- LinkedList도 일종의 Graph 자료구조다. (단순 연결 리스트(Singly Linked List))
- Node는 next를 가지고 있고, next는 다음 Node를 가리킨다.
- LinkedList는 head를 가지고 있고, head는 처음으로 연결된 Node를 가리킨다.

## 특징

1. 중간 삽입/삭제가 O(1)
2. 메모리 재할당 필요 없음 → 연속 메모리가 필요 없다
3. 노드 개수가 자주 변하는 구조에서 효율적
4. 특정 구조가 있다면 head/tail에서 빠른 작업 가능 (O(1))
5. random access 느림 → index 접근 느림 O(n)
6. cache locality 없음 → CPU 캐시 히트율 낮아 배열보다 느림
7. JS는 dynamic array가 훨씬 최적화됨.
8. 메모리 사용량이 많다 (노드마다 객체 + next pointer 필요)

## js class로 구현

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

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }
  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let node = this.head;
      while (node.next) {
        if (node.next.value === value) {
          node.next = node.next.next;
          return;
        }
        node = node.next;
      }
    }
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}

const node1 = new Node(2);
const node2 = new Node(5);
node1.next = node2;

const linkedList = new LinkedList(node1);
console.log(linkedList.size());
```

## js object로 구현

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
