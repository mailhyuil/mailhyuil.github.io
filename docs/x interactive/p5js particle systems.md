# p5js particle systems

> 파티클 시스템이란 수많은 입자(파티클)들이 모여 형체가 뚜렷하지 않은 물체를 구현하는 방법
>
> > 생성되고 소멸되는 lifespan을 가져야한다.
> >
> > > 생성되는 곳 emitter

## particle

```js
class Particle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-2, 0)); // 입자의 방향을 랜덤으로
    this.position = createVector(x, y); // 방출구
    this.lifespan = 255.0; // lifespan을 알파값으로 설정 0이되면 소멸
  }

  // 소멸 확인
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  // update 시 lifespan 감소
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2.0;
  }

  // Method to display
  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(0, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  run() {
    this.update();
    this.display();
  }
}
```

## particle systems

```js
class ParticleSystem {
  constructor(x, y) {
    this.particles = []; // 입자들을 담을 배열
  }

  addParticle(x, y) {
    this.particles.push(new Particle(x, y));
  }

  run() {
    // 모든 파티클들을 run
    for (let particle of this.particles) {
      particle.run();
    }

    // 소멸된 파티클은 제거 # isDead()는 true, false값을 반환
    this.particles = this.particles.filter((particle) => !particle.isDead());
  }
}
```

## sketch

```js
let ps;

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(200);
  ps.addParticle(mouseX, mouseY);
  ps.run();
}
```
