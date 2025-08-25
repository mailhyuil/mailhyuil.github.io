# matterjs

> 물리엔진 라이브러리

## 기본 셋팅

```js
import { Engine, Render, Runner, Bodies, Composite } from "matter-js";
// 엔진 생성
const engine = Engine.create();

// 렌더러 생성
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false, // style을 적용
  },
});

// 러너 생성 (엔진을 런 시키는 인스턴스)
const runner = Runner.create();

// create two boxes and a ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// world에 요소 추가
Composite.add(engine.world, [boxA, boxB, ground]);
// 렌더러 실행
Render.run(render);
// 엔진 실행
Runner.run(runner, engine);
```

## Axes

## Bodies

## Body

## Bounds

## Collision

## Common

## Composite

## Composites

## Constraint

## Contact

## Detector

## Engine

## Events

## Grid

## Matter

## Mouse

## MouseConstraint

## Pair

## Pairs

## Plugin

## Query

## Render

## Resolver

## Runner

## SAT

## Sleeping

## Svg

## Vector

## Vertices

## World
