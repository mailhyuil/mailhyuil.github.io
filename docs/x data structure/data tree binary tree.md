# data binary tree

- 하나의 노드가 두개의 자식을 갖는 구조

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
