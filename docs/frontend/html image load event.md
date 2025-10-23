# load image event

## onload 사용

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

## complete property 사용

```js
onLoaded() {
  return new Promise<void>(async (resolve) => {
    while (!this.image.nativeElement.complete) {
      // delay for 300ms
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    resolve();
  });
}

onLoaded().then(() => {
  console.log("loaded!");
});
```
