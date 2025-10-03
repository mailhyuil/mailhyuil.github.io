# testing base TDD

> 개발자의 뇌에 의존하지 않고, 테스트 결과에 의존하여 항상 같은 결과를 만드는 테스트 주도 개발
>
> > 테스트 코드를 먼저 작성한다!
> >
> > > 테스트 코드 작성 -> 코드 작성 -> 테스트 통과 -> 반복

## 간단한 테스팅 구현

```ts
function main() {
  // 1. test code 작성
  console.assert(add(1, 1) === 3);
  console.assert(add(-1, 1) === 0);
  console.assert(add(0, 0) === 0);

  // 3. test을 통과하면 서버를 실행
  const express = require("express");

  const app = express();

  app.get("/sum", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    const result = add(x, y);
    res.send(result.toString());
  });

  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

main();

// 2. 함수 작성
function add(x: number, y: number): number {
  return x + y;
}
```
