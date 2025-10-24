# data tree binary search tree

> 이진트리는 key와 value를 가지고 있어야 한다.
>
> > 이진 트리 구조는 항상 정렬이 되어있어야 한다.

```ts
class BinarySearchTree {
  //BST의 constructor를 구현합니다.
  value: number;
  left: BinarySearchTree | null;
  right: BinarySearchTree | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // tree에 value를 추가합니다.
  insert(value: number) {
    // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행합니다.
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.left.insert(value);
      }
    }
    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행합니다.
    else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가합니다.
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용합니다.
      else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함하고 있습니다.
    }
  }
  // tree의 value값을 탐색합니다.
  contains(value: number): boolean | undefined {
    // 찾는 value값이 노드의 value와 일치한다면, true를 리턴합니다.
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains의 재귀를 진행합니다.
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains의 재귀를 진행합니다.
    if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    }
  }
  //tree를 전위 순회 합니다.
  preorder(callback: any) {
    callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }
  // tree를 중위 순회 합니다
  inorder(callback: any) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }
  //tree를 후위 순회 합니다
  postorder(callback: any) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}
```
