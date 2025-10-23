# p5js 삼각법

## sin, cos, tan

> 직각삼각형일 때 각도에 따른 비율의 명칭

## 삼각함수

> 각도를 통해 비율을 알아낼 때

### 극좌표값을 직교좌표값으로 전환

> 극좌표값 === 각도, 길이(반지름)
>
> > 직교좌표값 === x, y

## y === sin(theta) \* r

## x === cos(theta) \* r

## y/x === tan(theta) \* r

### 삼각함수 회전시키기

> angle(theta) 값과 r값을 가지고
>
> > x, y값을 구해서 angle++

```
  line(
    width / 2,
    height / 2,
    sin(angle) * 50 + width / 2,
    cos(angle) * 50 + height / 2
  );
```

### sin()

### cos()

### tan()

## 역삼각함수

> 비율을 통해 각도를 알아낼 때

### asin()

### acos()

### atan()

### atan2()

## heading()

> atan()만 사용하면 방향이 다른 두 벡터가 같은 각도값을 가지게 된다.
>
> > 따라서 벡터의 부호 조건 등을 함께 비교해줘야한다.
> >
> > > heading() 을 사용하면 atan()을 사용한 후 다른 연산을 통해 방향을 연산해준다.
