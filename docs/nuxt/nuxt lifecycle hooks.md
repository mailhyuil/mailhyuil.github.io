# nuxt lifecycle hooks

서버의 라이프사이클이 필요시 사용

## nuxt.config

```ts
export default defineNuxtConfig({
  hooks: {
    close: () => {},
  },
});
```

## defineNuxtModule

```ts
import { defineNuxtModule } from "@nuxt/kit";
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook("close", async () => {});
  },
});
```

## defineNuxtPlugin

```ts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook("page:start", () => {
    /* your code goes here */
  });
});
```

## nitro

```ts
export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    console.log("render:html", html);
    html.bodyAppend.push("<hr>Appended by custom plugin");
  });
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    console.log("render:response", response);
  });
});
```
