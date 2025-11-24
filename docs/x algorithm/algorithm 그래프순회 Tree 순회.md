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
  callback(this.value); // 1
  if (this.left) {
    this.left.preOrder(callback); // 2
  }
  if (this.right) {
    this.right.preOrder(callback); // 3
  }
}
```

## 중위 순회 (in-order traversal)

- BST 문제 대부분
- 결과가 오름차순 정렬된 리스트로 나옴

```txt
    2
   / \
  1   3

Inorder: 1, 2, 3
```

```ts
function inOrder(callback: any) {
  if (this.left) {
    this.left.inOrder(callback); // 1
  }
  callback(this.value); // 2
  if (this.right) {
    this.right.inOrder(callback); // 3
  }
}
```

## 후위 순회 (post-order traversal)

- 트리 삭제
- subtree 계산

```txt
    1
   / \
  2   3

Postorder: 2, 3, 1
```

```ts
function postOrder(callback: any) {
  if (this.left) {
    this.left.postOrder(callback); // 1
  }
  if (this.right) {
    this.right.postOrder(callback); // 2
  }
  callback(this.value); // 3
}
```

## 층별 순회 (level-order traversal)

- 완전이진트리 기반 자료구조(힙)에서 필수

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
    callback(node.value); // 1
    if (node.left) queue.push(node.left); // 2
    if (node.right) queue.push(node.right); // 3
  }
}
```
