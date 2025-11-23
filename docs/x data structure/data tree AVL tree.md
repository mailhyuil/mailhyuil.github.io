# data tree AVL tree

- 자기 균형 이진 탐색 트리(Self-Balancing BST)
- 각 노드의 왼쪽 서브트리와 오른쪽 서브트리 높이 차가 최대 1을 넘지 않는 BST
- 최악에도 O(log n) 성능 보장

```js
class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // 노드 높이
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // 높이 구하기
  _height(node) {
    return node ? node.height : 0;
  }

  // 균형 계수 구하기
  _getBalance(node) {
    return node ? this._height(node.left) - this._height(node.right) : 0;
  }

  // 오른쪽 회전 (LL)
  _rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this._height(y.left), this._height(y.right)) + 1;
    x.height = Math.max(this._height(x.left), this._height(x.right)) + 1;

    return x;
  }

  // 왼쪽 회전 (RR)
  _rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this._height(x.left), this._height(x.right)) + 1;
    y.height = Math.max(this._height(y.left), this._height(y.right)) + 1;

    return y;
  }

  // 삽입
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) return new AVLNode(value);

    if (value < node.value) node.left = this._insert(node.left, value);
    else if (value > node.value) node.right = this._insert(node.right, value);
    else return node; // 중복 값 무시

    node.height = 1 + Math.max(this._height(node.left), this._height(node.right));
    const balance = this._getBalance(node);

    // LL
    if (balance > 1 && value < node.left.value) return this._rotateRight(node);
    // RR
    if (balance < -1 && value > node.right.value) return this._rotateLeft(node);
    // LR
    if (balance > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }
    // RL
    if (balance < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // 중위 순회
  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }
}

const avl = new AVLTree();
[10, 20, 30, 40, 50, 25].forEach(v => avl.insert(v));

console.log(avl.inOrder()); // [10, 20, 25, 30, 40, 50] → 항상 정렬 상태
```
