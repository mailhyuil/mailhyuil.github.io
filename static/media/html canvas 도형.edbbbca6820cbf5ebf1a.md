# html canvas 도형

## path

> 원을 그릴 때 사용

```js
moveTo(); // path를 생성하지 않고! 특정 포인트로 커서를 이동
lineTo(); // path를 생성하며 특정 포인트로 커서를 이동

beginPath(); // 그 전에 그린 path를 리셋시키고 새로운 path를 시작
arc(); // 원을 그릴 때 사용 arc(95, 50, 40, 0, 2 * Math.PI);
arcTo(); // 두 탄젠트 사이에 arc를 생성
stroke(); // 실제로 path를 그린다 path를 그리고 마지막에 사용
closePath(); // 닫힌 path를 생성

fill(); // path에 색을 칠한다.

quadraticCurveTo();
bezierCurveTo();

clip(); // 캔버스에 path를 따라 mask를 씌운다

inPointInPath(); //point가 path 안에 있는지 검사

lineCap();
lineJoin();
lineWidth();
miterLimit();
```

## 사각형

```js
fillRect();
strokeRect();
clearRect();
rect();
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
