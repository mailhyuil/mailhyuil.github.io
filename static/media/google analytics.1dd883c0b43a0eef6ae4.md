# google analytics

## vue

> install 'vue-gtag-next'

```
import VueGtag, { trackRouter } from "vue-gtag-next";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-4YD25RKEWM",
    },
  });
  trackRouter(useRouter());
});
```
