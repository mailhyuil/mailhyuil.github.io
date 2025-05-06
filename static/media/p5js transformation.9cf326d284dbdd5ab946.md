# p5js transformation

## push() & pop()

> pushMatrix & popMatrix
>
> > 레이어를 만들었다가 사라지게하기
> >
> > > 도형의 속성을 먼저 정의하고 도형을 그려야한다.

## translate()

> 레이어를 이동

```
push()
stroke(126, 0, 0); // 도형의 "속성"과 "transformation"은 도형보다 앞에 정의
strokeWeight(10);
fill(255, 0, 0);
translate(20, 20);
rect(0, 0, 50, 50); // **마지막에 도형 그리기
pop()
```

## rotate()

> 레이어를 회전
>
> > 라디안 단위 사용

### 라디안 구하기

> radians() 사용

```
let radian = [degree]*(180/PI)
```
