# nuxt-icon

## install

```sh
pnpm i --dev nuxt-icon
```

## nuxt.config.ts

```ts
modules: ["nuxt-icon"];
```

## usage

```vue
<Icon name="uil:github" />
<Icon name="🚀" />
```

## config

```ts
// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    aliases: {
      nuxt: "logos:nuxt-icon",
    },
  },
});
```
