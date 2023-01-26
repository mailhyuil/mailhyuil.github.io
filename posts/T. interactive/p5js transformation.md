# p5js transform

## push() & pop()

> pushMatrix & popMatrix
>
> > 레이어를 만들었다가 사라지게하기

## translate()

> 레이어를 이동

```
push()
translate(20, 20);
rect(0, 0, 50, 50)
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
