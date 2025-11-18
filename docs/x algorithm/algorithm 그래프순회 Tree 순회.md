# algorithm 그래프순회 Tree 순회

- 모든 원소를 빠뜨리거나 중복하지 않고 처리하는 연산
- 데이터 검색, 트리 구조 분석, 노드 처리, 트리 출력등의 목적에 따라서 선택
- 자식이 먼저 처리되는지 부모가 먼저 처리되는지에 따라서 전위, 중위, 후위 순회로 구분

## 전위 순회 (pre-order traversal)

- 트리 복사, serialize

```txt
    1
   / \
  2   3

Preorder: 1, 2, 3
```

```ts
function preOrder(callback: any) {
  callback(this.value);
  if (this.left) {
    this.left.preOrder(callback);
  }
  if (this.right) {
    this.right.preOrder(callback);
  }
}
```

## 중위 순회 (in-order traversal)

- BST 문제 대부분

```txt
    2
   / \
  1   3

Inorder: 1, 2, 3
```

```ts
function inOrder(callback: any) {
  if (this.left) {
    this.left.inOrder(callback);
  }
  callback(this.value);
  if (this.right) {
    this.right.inOrder(callback);
  }
}
```

## 후위 순회 (post-order traversal)

- subtree 계산, 트리 삭제

```txt
    1
   / \
  2   3

Postorder: 2, 3, 1
```

```ts
function postOrder(callback: any) {
  if (this.left) {
    this.left.postOrder(callback);
  }
  if (this.right) {
    this.right.postOrder(callback);
  }
  callback(this.value);
}
```

## 층별 순회 (level-order traversal)

- 레벨 기반 문제

```txt
    1
   / \
  2   3
 / \
4   5

Level order: 1, 2, 3, 4, 5
```

```ts
function levelOrder(callback: any) {
  const queue = [];
  queue.push(this);

  while (queue.length > 0) {
    const node = queue.shift();
    callback(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```
