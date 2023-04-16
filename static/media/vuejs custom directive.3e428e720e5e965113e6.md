# vuejs custom directive

> vueApp 인스턴스로 directive를 등록할 수 있다.
>
> > nuxtApp.vueApp으로 vue 인스턴스를 가져올 수 있다.

```ts
import { Directive } from "nuxt/dist/app/compat/capi";

export default defineNuxtPlugin((app) => {
  app.vueApp.directive("scroll", <Directive<HTMLElement>>{
    // derective이름을 v-scroll로
    mounted: (el, { value }) => {
      el.classList.add("scroll-directive");

      const { anchor, change, items } = value;

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (anchor === 1) {
              value.segment = value.items[0];
              change(items[0]);
            } else if (anchor === 2) {
              value.segment = value.items[1];
              change(items[1]);
            } else {
              value.segment = value.items[2];
              change(items[2]);
            }
          }
          // if (entry.intersectionRatio > 0) {
          //     // entry.target.classList.add('view');
          // } else {
          //     // entry.target.classList.remove('view');
          // }
        });
      });
      io.observe(el);
    },
  });
});
```

```
v-scroll="{ segment: segment, items: segmentItems, anchor: 2, change }"
```
