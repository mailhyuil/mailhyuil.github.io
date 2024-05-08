# nuxt plugins

> defineNuxtPlugin(nuxtApp=>())

## format

> plugins/gsap.client.ts

```ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { gsap }, // {gsap:gsap}
  };
});
```

## usage

> useNuxtApp()

```ts
const $gsap = useNuxtApp().$gsap;
// or
const { $gsap } = useNuxtApp();
```
