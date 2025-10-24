# data Heap Array

```
루트 노드의 위치 인덱스의 값은 1
노드 i 의 부모 노드 인덱스 = [i / 2] , i>1 일때

노드 i 의 왼쪽 자식 노드 인덱스 = 2 * i
노드 i의 오른쪽 자식 노드 인덱스 = (2 * i) + 1
```

## Root 노드

```
heap[1]
```

## 마지막 노드

```
heap[heap.length - 1]
```

## 노드의 개수

```
heap.length - 1
```

## 노드 i의 부모 노드

```
heap[Math.floor(i / 2)]
ex) [5 / 2] = [2.5] = 2
```

## 노드 i의 왼쪽 자식 노드

```
heap[2 * i]
```

## 노드 i의 오른쪽 자식 노드

```
heap[(2 * i) + 1]
```

## 삽입

```
heap.push(value)
```

## 삭제

```
heap.pop()
```
