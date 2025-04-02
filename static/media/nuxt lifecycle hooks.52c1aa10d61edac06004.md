# nuxt lifecycle hooks

## 종류

[Nuxt Lifecycle Hooks](https://nuxt.com/docs/api/advanced/hooks)

## usage

1. nuxt.config

```
export default defineNuxtConfig({
  hooks: {
    'close': () => { }
  }
})
```

2. defineNuxtModule

```
import { defineNuxtModule } from '@nuxt/kit'
export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('close', async () => { })
  }
})
```

3. defineNuxtPlugin

```
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', () => {
        /* your code goes here */
     })
})
```

4. nitro

```
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    console.log('render:html', html)
    html.bodyAppend.push('<hr>Appended by custom plugin')
  })
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log('render:response', response)
  })
})
```
