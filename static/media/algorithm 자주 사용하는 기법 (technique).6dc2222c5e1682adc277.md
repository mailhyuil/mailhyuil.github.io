# algorithm js 자주 사용하는 기능

## fs 파일 읽기

```js
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const lines = input[0].split(" ");

const line1 = parseInt(lines[0]);
const line2 = parseInt(lines[1]);
```

## readline

```js
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];
rl.on("line", (line: string) => {
  // 입력창에 enter칠때마다 호출
  input.push(line);
  console.log(input);
}).on("close", () => {
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
let answer = "";

for (let i = 0; i < 100; i++) {
  answer += i + "\n";
}
console.log(answer);
```

## 분배 기법

### Weighted Distribution

> 난수를 이용해서 선택을 결정한다.
>
> > weight대신 다른 값을 사용가능 ex) latency...

```js
const servers = [
  { name: "Server1", weight: 0.5 },
  { name: "Server2", weight: 0.5 },
  { name: "Server3", weight: 0.5 },
];

function getWeightedServer() {
  const totalWeight = servers.reduce((a, b) => a + b.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (const server of servers) {
    cumulativeWeight += server.weight;
    console.log("cumulativeWeight:", cumulativeWeight);
    console.log("random:", random);
    if (random < cumulativeWeight) {
      return server.name;
    }
  }

  return false;
}

const selectedServer = getWeightedServer();
console.log("Selected Server:", selectedServer);
```

## 감지 기법

## 투포인터

> start, end 또는 left, right 두개의 포인터를 이용해서 특정한 조건을 만족할 때까지 앞으로 나가거나 뒤로 나가는 기법
