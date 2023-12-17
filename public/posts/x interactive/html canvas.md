# html canvas

## html

```html
<!-- canvas는 css style의 상대크기 (e.g. 100%로 크기를 지정하면 안된다.)-->
<canvas id="myCanvas"></canvas>
```

## js

```js
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d"); // context 불러오기

// canvas 크기 지정
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
```

## 도형

```js
// 사각형 그리기
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75);
// 선 그리기
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
// 원 그리기
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
// 그라데이션
const grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
// 텍스트
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Hello World", 100, 50);
// 이미지
const img = document.getElementById("scream");
ctx.drawImage(img, 10, 10);
```
