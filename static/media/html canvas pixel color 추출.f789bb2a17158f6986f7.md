# html canvas pixel color 추출

```js
// Get the canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Get the pixel color at position (x, y)
const imageData = ctx.getImageData(x, y, 1, 1);
const pixelColor = imageData.data;

// The pixelColor array contains the red, green, blue, and alpha values of the pixel
const red = pixelColor[0];
const green = pixelColor[1];
const blue = pixelColor[2];
const alpha = pixelColor[3];
```

## click 이벤트로 추출

```js
// Get the canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Add a "click" event listener to the canvas
canvas.addEventListener("click", function (event) {
  // Get the position of the click relative to the canvas
  const x = event.offsetX;
  const y = event.offsetY;

  // Get the pixel color at the clicked position
  const imageData = ctx.getImageData(x, y, 1, 1);
  const pixelColor = imageData.data;

  // The pixelColor array contains the red, green, blue, and alpha values of the pixel
  const red = pixelColor[0];
  const green = pixelColor[1];
  const blue = pixelColor[2];
  const alpha = pixelColor[3];

  // Do something with the pixel color, (e.g. log it to the console)
  console.log(`Clicked color: rgba(${red}, ${green}, ${blue}, ${alpha})`);
});
```
