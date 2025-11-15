# algorithm 그래프순회 Tree 순회

> 모든 원소를 빠뜨리거나 중복하지 않고 처리하는 연산
>
> > 데이터 검색, 트리 구조 분석, 노드 처리, 트리 출력등의 목적에 따라서 선택
> >
> > > 자식이 먼저 처리되는지 부모가 먼저 처리되는지에 따라서

## 전위 순회 (pre-order traversal)

![전위순회-1](./img/전위순회-1.png)
![전위순회-2](./img/전위순회-2.png)

```ts
function preorder(callback: any) {
  callback(this.value);
  if (this.left) {
    this.left.preorder(callback);
  }
  if (this.right) {
    this.right.preorder(callback);
  }
}
```

## 중위 순회 (in-order traversal)

![중위순회-1](./img/중위순회-1.png)
![중위순회-2](./img/중위순회-2.png)

```ts
function inorder(callback: any) {
  if (this.left) {
    this.left.inorder(callback);
  }
  callback(this.value);
  if (this.right) {
    this.right.inorder(callback);
  }
}
```

## 후위 순회 (post-order traversal)

![후위순회-1](./img/후위순회-1.png)
![후위순회-2](./img/후위순회-2.png)

```ts
function postorder(callback: any) {
  if (this.left) {
    this.left.postorder(callback);
  }
  if (this.right) {
    this.right.postorder(callback);
  }
  callback(this.value);
}
```

## 층별 순회 (level-order traversal)

![레벨순회](./img/레벨순회.png)

```ts
function levelorder(callback: any) {
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
