# algorithm Distribution 분배

## Weighted Distribution

- 난수를 이용해서 선택을 결정한다.
- weight대신 다른 값을 사용가능 (e.g. latency...)

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

## latency Distribution

> 난수를 이용해서 선택을 결정한다.
>
> > 확률 계산! = 선택한 대상 / (비교대상 + 비교대상 + 비교대상)

```js
// 서버 응답 지연 시간
const currentVersion = {
  name: "CurrentVersion",
  latency: 100, // 현재 버전의 응답 지연 시간 (예: 밀리초 단위)
};

const canaryVersion = {
  name: "CanaryVersion",
  latency: 50, // 카나리 버전의 응답 지연 시간 (예: 밀리초 단위)
};

// 서버 선택
function getServer() {
  const random = Math.random(); // 0 이상 1 미만의 난수 생성

  // 카나리 서버 선택 *확률 계산*
  const canaryProbability = canaryVersion.latency / (currentVersion.latency + canaryVersion.latency);

  if (random < canaryProbability) {
    return canaryVersion.name; // 카나리 서버 선택
  } else {
    return currentVersion.name; // 현재 버전 서버 선택
  }
}

// 테스트
const selectedServer = getServer();
console.log("Selected Server:", selectedServer);
```
