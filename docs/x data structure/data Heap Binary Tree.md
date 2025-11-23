# data Heap Binary Tree

- 최솟값 혹은 최댓값을 빠르게 찾아내는 자료구조
- 완전 이진트리를 사용
- 삽입, 삭제에 O(logN)

## 최대 힙

- 값이 가장 큰 원소부터 추출

## 최소 힙

- 값이 가장 작은 원소부터 추출

## heapify

- 최대힙, 최소힙을 만드는 과정

1. 원소가 삽입되면 부모로 거슬러 올라가며(상향식) 부모보다 자신이 더 작은 경우 교체
2. 원소가 삭제되면 가장 마지막에 위치하는 데이터를 루트로 교체 -> 1번을 반복

## 구현

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 루트부터 값 삽입 (간단하게 왼쪽 우선)
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if (!node.left) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.right);
      }
    }
  }

  // BFS 레벨순회
  levelOrder() {
    if (!this.root) return [];
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.levelOrder()); // [1, 2, 3, 4, 5]
```
