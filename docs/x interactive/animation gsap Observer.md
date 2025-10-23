# animation gsap Observer

## setup

```ts
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);
```

## usage

```ts
Observer.create({
  target: window, // can be any element (selector text is fine)
  type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
  onUp: () => prev(),
  onDown: () => next(),
});

function prev() {
  console.log("prev");
}

function next() {
  console.log("next");
}
```
