# p5js 도형

## point

```
point(x, y, [z])
point(coordinate_vector)

coordinate_vector p5.Vector: 좌표 벡터
```

## line

> stroke(r,g,b)
>
> > strokeWeight()

```
line(x1, y1, x2, y2);
line(x1, y1, z1, x2, y2, z2)
stroke(100)
strokeWeight(10)
```

## arc

```
arc(x, y, w, h, start, stop, [mode], [detail])

start 숫자: 라디안 단위, 호의 시작점 각도값
stop 숫자: 라디안 단위, 호의 끝점 각도값
mode 상수: (선택 사항) 호를 그리는 방식들로, CHORD, PIEC, OPEN 중 선택 가능
detail 숫자: (선택 사항) 호의 윤곽선을 구성하는 꼭짓점 개수를 지정. 기본값은 25. (WebGL 모드용)
```

## ellipse

```
ellipse(x, y, w, [h])
ellipse(x, y, w, h, [detail])

detail 정수: (선택사항) 타원을 몇 개의 부분으로 나누어 그릴 것인지 지정 (WebGL 모드용)
```

## rect

```
rect(x, y, w, [h], [tl], [tr], [br], [bl])
rect(x, y, w, h, [detailX], [detailY])

tl 숫자: (선택 사항) 좌측 상단 모퉁이 각도값.
tr 숫자: (선택 사항) 우측 상단 모퉁이 각도값.
br 숫자: (선택 사항) 우측 하단 모퉁이 각도값.
bl 숫자: (선택 사항) 좌측 하단 모퉁이 각도값.
detailX 정수: (선택 사항) x축 방향의 선분 수 (WebGL 모드용)
detailY 정수: (선택 사항) y축 방향의 선분 수 (WebGL 모드용)
```

## triangle

```
triangle(x1, y1, x2, y2, x3, y3)
```
