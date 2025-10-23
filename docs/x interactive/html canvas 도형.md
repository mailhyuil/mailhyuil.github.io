# html canvas 도형

## path

> path를 만들고 stroke나 fill 둘 중 하나만 써도 된다.
>
> > fill() stroke()는 path에만 쓴다.
> >
> > > fill = fillStyle, stroke = strokeStyle
> > >
> > > > fillStyle을 맨 위에 써줘야한다.

```js
moveTo(); // path를 생성하지 않고! 특정 포인트로 커서를 이동
lineTo(); // path를 생성하며 특정 포인트로 커서를 이동
// moveTo는 펜을 종이에서 뗀 상태로 이동하는 것
// lineTo는 펜을 종이에 붙인 상태로 이동하는 것

beginPath(); // 그 전에 그린 path를 리셋시키고 새로운 path를 시작
arc(); // 원을 그릴 때 사용 arc(95, 50, 40, 0, 2 * Math.PI);
// arc(x, y, r, startAngle, endAngle) startAngle에 0, endAngle에 TWO_PI를 넣어주면 원이 된다.
arcTo(); // 두 탄젠트 사이에 arc를 생성
stroke(); // 실제로 path를 그린다 path를 그리고 마지막에 사용
closePath(); // closePath()로 닫을 수 있다.

fill(); // path에 색을 칠한다.

quadraticCurveTo();
bezierCurveTo();

clip(); // 캔버스에 path를 따라 mask를 씌운다

inPointInPath(); //point가 path 안에 있는지 검사

lineCap = "round"; // butt round square
lineWidth = Math.sin(angle) ** 2 * 10 * 1;
lineJoin = "round"; // bevel round miter
miterLimit = 10;
```

### beginPath()

> path를 그릴 때 beginPath()를 반드시 호출해줘야한다
>
> > 그 전에 그린 path들이 쌓여서 속도가 느려진다.

## rect

```js
rect();
fillRect(); // 항상 fillRect를 사용 // path로 구현된다!
strokeRect();
clearRect(); // p5의 redraw는 clearRect로 전체 화면을 지우는 걸로 구현
```

## rounded rect

```
// Rounded rectangle with four different radii
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

## text

```js
font();
textAlign();
textBaseline();
fillText();
strokeText();
measureText();
```

## fill color

> 도형을 그리고 마지막에 칠해주기

```js
ctx.fillStyle = "red";
ctx.fillRect();
```
