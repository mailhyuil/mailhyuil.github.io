# defineNuxtPlugin()
## plugins/gsap.client.ts
```
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { gsap }, // {gsap:gsap}
  };
});
```

## useNuxtApp()
```
const $gsap = useNuxtApp().$gsap
// or
const { $gsap } = useNuxtApp();
```