# data UnionFind (Disjoint-Set Union)

- 집합을 빠르게 합치고, 같은 집합인지 확인하는 트리 기반 자료구조
- 서로소 집합(disjoint set)들을 관리하는 자료구조
- 집합 관계 관리 목적

```js
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(1);
  }

  // x가 속한 집합의 대표를 반환
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // 경로 압축
    }
    return this.parent[x];
  }

  // x와 y가 속한 집합을 합침
  union(x, y) {
    let px = this.find(x);
    let py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    return true;
  }
}

// 사용 예시
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.find(2)); // 0
console.log(uf.find(3)); // 3
```
