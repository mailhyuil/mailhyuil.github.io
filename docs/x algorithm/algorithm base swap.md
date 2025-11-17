# algorithm base swap

## 기존 스타일

```ts
let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;

console.log(a, b); // 2 1
```

## 분해 할당

```ts
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1
```

## 함수형

```ts
let a = 1;
let b = 2;

const swap = (a, b) => [b, a];

[a, b] = swap(a, b);

console.log(a, b); // 2 1
```
