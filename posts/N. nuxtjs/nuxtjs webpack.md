# nuxtjs webpack

## nuxt.config.ts

```
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  builder: "webpack",
  hooks: {
    "webpack:config"(configs) {},
  },
});
```
