# data array

- 메모리내에 연속적으로 할당되는 자료구조
- 컴퓨터 과학에서는 Array라고 부르고
- 수학에서는 Vector라고 부른다.

## concat (concatenate)

- 배열들을 이어붙이기

## slice(left, right)

## splice(index, 1)

## indexOf

## 2차원 array

```js
let arr = Array.from(Array(4), () => new Array(5));
```

```js
let arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Array.from({ lenght: 4 }, (undefined, j) => i * 4 + j);
}
```

## stack

- linked list로 구현할 때 삽입과 삭제에 O(1)

### push

- O(1)

### pop

- O(1)
