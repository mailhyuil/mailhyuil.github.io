# p5js image & pixel

## image 객체 함수 사용

```js
let img;

function preload() {
  img = loadImage("image.jpg");
}

function setup() {
  createCanvas(400, 400);
  img.resize(width, height);

  img.loadPixels(); // 이미지를 로드
  console.log(img.get(0, 0)); // pixel
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      const c = img.get(x, y); // 이미지의 x, y 값에 있는 픽셀 가져오기 pixel은 [r, g, b, a]의 배열
      c[1] = mouseX; // 픽셀값 수정
      img.set(x, y, c); // 수정된 픽셀값 set
    }
  }
  img.updatePixels(); // 수정된 픽셀로 이미지를 업데이트
  image(img, 0, 0, width, height);
}
```

## static 메소드 사용

```js
let img;

function preload() {
  img = loadImage("image.jpg");
}

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  img.resize(width, height);
  image(img, 0, 0, width, height);

  let imgPixels = width * height * 4; // 이미지의 픽셀 개수
  loadPixels(); // 이미지를 로드
  for (let i = 0; i < imgPixels; i += 4) {
    // i += 4 rgba
    pixels[i + 0] = 255; // red
    pixels[i + 1] = 255; // green
    pixels[i + 2] = 255; // blue
    pixels[i + 3] = 255; // alpha
  }
  updatePixels(); // 수정된 픽셀로 이미지를 업데이트
}
```
