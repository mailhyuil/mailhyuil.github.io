# nuxt-icon

## install

```
yarn add --dev nuxt-icon
```

## nuxt.config.ts

```
modules: ['nuxt-icon']
```

## usage

```
<Icon name="uil:github" />
<Icon name="🚀" />
```

## config

```
// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  }
})
```
