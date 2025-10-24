# elasticsearch base workflow

```
indexing -> index/indices 생성 -> query -> search -> document
```

```sh
index/indices # 데이터의 집합
              # 멀티 노드 클러스터에서는 여러 노드에 걸쳐 인덱스를 분산시킨다. (shard)

document # 단일 데이터

search # index/indices에서 document를 찾는다.

query # search를 위한 질의
```
