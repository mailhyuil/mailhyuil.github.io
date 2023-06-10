# algorithm js 자주 사용하는 기능

## fs 파일 읽기

```js
const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const lines = input[0].split(' ');

const line1 = parseInt(lines[0]);
const line2 = parseInt(lines[1]);
```

## readline

```js
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];
rl.on('line', (line: string) => {
  // 입력창에 enter칠때마다 호출
  input.push(line);
  console.log(input);
}).on('close', () => {
  // ctrl + D를 하면 호출
  console.log(input);
  process.exit();
});
```

## new Array

## toFixed(2)

> 소수점 2자리에서 자르기

## 값 변환

```
Number(input[0]) // 소수점도 그대로 놔둠
parseInt() // 2020년도 -> 2020 integer로 변환
+input[0]
input[0].toString()
input+''
```

## 빠른 출력

> console.log를 한번만 호출 시켜라

```js
let answer = '';

for (let i = 0; i < 100; i++) {
  answer += i + '\n';
}
console.log(answer);
```
