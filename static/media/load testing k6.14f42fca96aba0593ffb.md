# load testing k6

> grafana에서 개발한 오픈소스 부하테스트 도구
>
> > jmeter보다 더 경량화 및 최적화 되어있음
> >
> > 단 GUI가 없음
> >
> > > 스크립트를 js로 작성

## install

```sh
# mac
brew install k6
# window
choco install k6
# linux
apt install k6
# docker
docker pull grafana/k6
# vscode 자동완성용
npm i -D @types/k6

# run
k6 run script.ts

# report 생성
## json으로 출력
k6 run --out json=result.json script.ts
## csv로 출력
k6 run --out csv=result.csv script.ts
## influxdb로 출력
k6 run --out influxdb=http://localhost:8086/k6 script.ts
```

## script.ts

```js
//@ts-ignore
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
//@ts-ignore
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { check, sleep } from "k6";
import http from "k6/http";
import { Options } from "k6/options";

export const options: Options = {
  vus: 6,
  duration: "30s",
};

export default function () {
  const url = "https://www.dep.team/api/v1";

  const res = http.get(url);

  check(res, {
    "status is 200": r => r.status === 200,
    "response time < 200ms": r => r.timings.duration < 200,
  });

  sleep(1); // 1초 대기 후 다음 요청
}

// report html 생성 용
export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
```
