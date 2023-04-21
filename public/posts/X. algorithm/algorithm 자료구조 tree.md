# algorithm js tree

> 루트노드 : 부모가 없는 최상위 노드
>
> > 리프노드 : 자식이 없는 최하위 노드
> >
> > > 깊이 : 루트 노드에서의 단계

```js
class Tree {
  constructor(value) {
    this.value = value; // node가 가지고 있는 값
    this.children = []; // node의 자식들
  }

  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    if (this.value === value) {
      // node 자신의 값이라면 true
      return true;
    }
    // 아니면 children에서 탐색
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }

    // 전부 탐색했음에도 찾지 못했다면 false
    return false;
  }
}
const t = new Tree('a');
t.insertNode('b');
t.insertNode('c');
console.log(t.contains('a'));
```

## tree traversal

### 전위 순회 (preorder traversal)

![](/img/전위순회-1.png)

![](/img/전위순회-2.png)

### 중위 순회 (inorder traversal)

![](/img/중위순회-1.png)

![](/img/중위순회-2.png)

### 후위 순회 (postorder traversal)

![](/img/후위순회-1.png)

![](/img/후위순회-2.png)

### 레벨 순회 (level traversal)

![](/img/레벨순회.png)
