# p5js noise

## noise()

> Perlin Noise값(0과 1 사이) 생성
>
> > 자연적인 질서를 가진 임의값을 생성하는 알고리즘
> >
> > > map을 사용하여 noise값을 theta 값으로 변환한 뒤 sin의 theta로 사용

```js
let xoff = 0;
let yoff = 0;
let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
sin(theta);
yoff += 0.1;
xoff += 0.1;
```

```
noise(x, [y], [z])

x 숫자: 노이즈 공간 속 x좌표값
y 숫자: (선택 사항) 노이즈 공간 속 y좌표값
z 숫자: (선택 사항) 노이즈 공간 속 z좌표값
```

## noiseDetail()

> 펄린 노이즈 함수로 생성되는 문자와 세부 레벨을 조정합니다.

## noiseSeed()

> noise()의 시드(seed) 값을 설정
