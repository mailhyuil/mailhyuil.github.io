# p5js 힘(Force)

> 힘은 질량이 있는 객체가 가속도를 갖게 하는 벡터이다.

## 뉴턴 1법칙

> 다른 힘의 영향을 받지 않는다면가만히 있는 물체는 계속 가만히 있고, 움직이는 물체는 같은 속도와 방향으로 계속 움직인다.
>
> > 다른 힘의 영향을 받지 않는 상태 == 평형상태
> >
> > > (i.e. 객체가 평형상태라면 벡터의 속도는 그대로 유지된다.)

## 뉴턴 2법칙

> 힘은 질량과 가속도를 곱한 값이다.
>
> > 힘 = 질량 \* 가속도
>
> > > (i.e. 힘 벡터 = 질량 \* 가속도 벡터)

```js
applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
}
```

## 뉴턴 3법칙

> 어떤 물체에 힘을 주면 반대 방향으로도 같은 힘이 일어난다.
>
> > 힘은 언제나 쌍으로 발생한다. 두힘의 크기는 같지만 방향은 반대이다.
> >
> > > 질량이 큰 물체는 힘도 크다, 즉 질량이 다른 두 물체가 만나면 질량이 작은 물체가 뒤로 밀려난다. (무게 = 질량 \* 중력)
> > >
> > > > (i.e. a가 b에 F라는 힘을 준다면 b도 a에게 -F의 힘을 줘야한다)

### 힘이 될 벡터/질량 = 힘벡터

> 힘벡터 + 가속도

1. 다음 위치 구하기
   > 위치 + 속도

```
position + velocity (위치 + 속도)
```

2. 가속도 더하기

   > 속도 + 가속도

```
velocity + acceleration
```

3. 가속도 = 힘

```
acceleration = force
```

## 힘의 축적

> 힘은 전부 더하면 된다
>
> > (i.e. 힘을 전부 더한 것이 가속도다.)

```js
applyForce(force) {
   acceleration.add(force);
}
```

## 가속도는 한 순간에만 적용되는 것

> 가속도는 항상 초기화시켜주어야 한다.

```
acceleration.mult(0)
```

## 마찰력

> 전체 에너지를 감소시키는 힘
>
> > 필요 상수 -> 마찰 계수, 수직력

```
Friction = 마찰 계수 * 수직력 * 단위벡터 * -1
```

## 점성력 & 저항력 & 유체 저항력

> 마찰력과 비슷하지만 공식이 약간 다르다

```
F = (속력(벡터의 길이) ** 2) * 저항 계수 * 단위벡터 * -1
```

## 중력

```
Gravity = ((중력상수 * 객체1의 질량 * 객체2의 질량) / 두 물체 사이의 거리 ** 2) * 객체1에서 객체2로의 방향의 단위 벡터
```

> Attractor와 Mover
>
> > Attractor는 끌어당기고
>
> > > Mover는 끌려간다

# 힘 구현의 기본

```js
class Obj {
  constructor(x, y) {
    this.position = createVector(x, y); // 위치
    this.velocity = createVector(1, 1); // 속도
    this.acceleration = createVector(0, 0); // 가속도
    this.mass = random(5, 15); // 질량
  }

  display() {
    fill(255);
    ellipse(this.position.x, this.position.y, this.mass);
  }

  update() {
    this.velocity.add(this.acceleration); // 속도 + 가속도
    this.position.add(this.velocity); // 위치 + 속도
    this.acceleration.mult(0); // 가속도 초기화 (가속도의 순간에만 적용된다.)
  }

  applyForce(force) {
    force.sub(this.position); // 방향 구하기
    force.setMag(0.1); // 힘의 크기(벡터의 길이) 넣기
    force.mult(this.mass * 0.1); // 힘은 질량 * 가속도
    this.acceleration.add(force); // 가속도 = 힘

    let friction = createVector(this.velocity.x, this.velocity.y); // 객체의 속도
    friction.mult(-1); // 반대 방향으로 바꾸기
    friction.normalize(); // 정규화
    friction.mult(0.05); // 마찰 계수로 곱하기
    this.acceleration.add(friction); // 가속도 = 힘
  }
}
```
