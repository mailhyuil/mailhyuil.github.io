# algorithm base technique

## 파일 읽기

```js
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const lines = input[0].split(" ");

const line1 = parseInt(lines[0]);
const line2 = parseInt(lines[1]);
```

## console에서 입력받기

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", line => {
  // 입력창에 enter칠때마다 호출
  input.push(line);
  console.log(input);
});

rl.on("close", () => {
  // ctrl + D를 하면 호출
  console.log(input);
  process.exit();
});
```

## new Array

```js
new Array(n + 1).fill(0);
```

## 값 변환

```js
// to number
Number(str); // 소수점도 그대로 놔둠
parseInt(str); // 2020년도 -> 2020 integer로 변환
+str;

// to string
num.toString(); // null, undefined는 에러 반환
num + "";
String(num);
```

## 빠른 출력

> console.log를 한번만 호출 시켜라
>
> > minibatch

```js
let answer = "";

for (let i = 0; i < 100; i++) {
  answer += i + "\n";
}
console.log(answer);
```

## 투포인터

> start, end 또는 left, right 두개의 포인터를 인덱스로 이용해서
>
> > 특정한 조건을 만족할 때까지 앞으로 나가거나 뒤로 나가는 기법

## visited table

> 방문한 노드를 체크하는 배열
>
> > 1차원 배열: 방문한 노드의 번호를 인덱스로 표현
> >
> > > 2차원 배열: 방문한 노드의 좌표를 인덱스로 표현

```js
const visited = {};
visited["A"] = true;
if (!visited["A"]) {
  console.log("방문하지 않음");
}
```

## pruning (가지치기)

> 유망하지 않은 노드는 탐색하지 않는 것
>
> > if로 조건을 걸어서 불필요한 탐색을 줄이기

## 반복문 내에서는 반드시 조건문을 고려해라

## object를 key로 쓰기 기법

> Map, WeakMap으로 구현 가능
>
> > WeakMap을 고려

## for/while 문 내의 재귀문

> 재귀문을 반복적으로 호출
>
> > 조건문을 통해서 재귀문 호출을 줄여나가야함

```js
for (i of array) {
  if (!visited[i]) {
    dfs(graph, i, visited);
  }
}
```

## 일단 더하고 빼면서 확인하기 기법

```js
while(){
  while(){
    intervalSum += arr[right]
  }

  intervalSum === m

  intervalSum -= arr[left]
}
```
