# data tree Quad Tree

- 2D 공간을 네 개 사분면(Quadrant)으로 재귀적으로 계속 분할하는 트리 구조
- 2D에서 객체를 저장하거나 검색하거나 충돌 검사를 할 때 그냥 배열이나 리스트로 관리하면 → 느림 (O(N))
- 하지만 QuadTree는 영역을 분할해서 필요한 부분만 검사하므로 빠름 (O(log N))

```js
class Node {
  constructor(
    public val: boolean,
    public isLeaf: boolean,
    public topLeft: Node | null = null,
    public topRight: Node | null = null,
    public bottomLeft: Node | null = null,
    public bottomRight: Node | null = null
  ) {}
}
```
