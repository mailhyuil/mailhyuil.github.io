# 재귀 merge

> 두 리스트의 맨 앞의 값 중 작은값을 현재 스코프(함수)에 남겨두고 재귀로 들어간다.

```js
const list1 = [2, 4, 6];
const list2 = [2, 3, 9, 10];

const merge = (list1, list2) => {
  if (list1.length < 1) {
    return list2;
  }
  if (list2.length < 1) {
    return list1;
  }

  if (list1[0] < list2[0]) {
    return [list1[0], ...merge(list1.slice(1), list2)];
  } else {
    return [list2[0], ...merge(list1, list2.slice(1))];
  }
};

const newList = merge(list1, list2);
console.log(newList);
```
