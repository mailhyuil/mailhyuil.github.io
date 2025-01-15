# p5js 자율 에이전트

> 스스로가 환경 내부에서 어떤 행동을 할지 결정하는 객체
>
> > 조향 행동 (Steering Behavior)을 하는 객체.
> >
> > > 조향 행동 : 크레이그 레이놀즈가 개발한 디지털 환경에서 객체의 행동
> > >
> > > > 조향 행동은 벡터 하나를 어떻게 구할 것인지와 관련된 이야기다.

### 이상적인 조향 객체(Vehicle)의 운동

1. 행동 선택
2. 조향
3. 이동 운동

## 조향력

> 조향력은 욕망속도 - 속도

```
steeringForce = desired vector - velocity vector
```

### desired vector

```
desired = target vector - location
```

### 자신이 움직일 수 있는 \*최대 속도로 대상을 향해 움직여야한다.

```
const maxspeed; // 최대 속도

desired.normalize();
desired.mult(maxspeed);
```

### 환경을 인식할 수 있는 \*한정된 능력이 있어야 한다.

```
const steeringForce = PVector.sub(desired, velocity);

const maxforce; // 최대 조향력

steeringForce.limit(maxforce);
```

## 도착행동

> 목표에 가까워질수록 변화하는 객체의 행동
>
> > 목표의 반경에 들어오면 욕망속도를 변경해주자

```js
if (d < 100) {
  m = map(d, 0, 100, 0, maxspeed);
  desired.mult(m);
} else {
  desired.mult(maxspeed);
}
```

## 흐름장 추적(Flow Field following)

> 흐름장(벡터필드)의 벡터를 읽고 그 벡터를 참조해 조향하는 것.

### 흐름장 생성

> 2차원 배열(행렬) 사용
>
> > 배열 하나에 벡터 하나가 들어간다.

```js
let arr;
const resolution = 10; // 해상도 ** 한 픽셀의 크기
let cols;
let rows;

function setup() {
  createCanvas(640, 360);

  cols = width / resolution;
  rows = height / resolution;

  arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      arr[i][j] = createVector(1, 1);
    }
  }
}

function draw() {
  background(25);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      push();
      translate(i * resolution, j * resolution); // 한 픽셀의 위치 (행 * 해상도, 열 * 해상도)
      stroke(200, 100);
      rotate(arr[i][j].heading()); // 방향
      let len = arr[i][j].mag() * resolution - 5; // 길이
      line(0, 0, len, 0);
      pop();
    }
  }
}
```
