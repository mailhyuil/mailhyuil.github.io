# animation gsap TextPlugin

## setup

```ts
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
```

## usage

```ts
//replaces ele's text with "This is the new text" over the course of 2 seconds
gsap.to(ele, {
  duration: 2,
  text: "This is the new text",
  ease: "none",
});

gsap.to(ele, {
  duration: 2,
  text: {
    value: "Your new text",
    newClass: "class2",
    delimiter: " ",
  },
});
```
