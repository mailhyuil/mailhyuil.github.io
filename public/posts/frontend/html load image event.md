# load image event

```js
const src = "assets/icons/certification.svg";

function load(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", resolve);
    image.addEventListener("error", reject);
    image.src = src; // by setting an src, you trigger browser download
  });
}

load(src).then(() => {
  console.log("loaded!");
});
```
