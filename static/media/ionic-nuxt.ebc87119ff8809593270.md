# nuxtjs/ionic

## install

```
yarn add --dev @nuxtjs/ionic
```

## nuxt.config.ts

```
modules: ['@nuxtjs/ionic']
```

## capacitor

> android 나 ios 플랫폼으로 사용할 수 있게 해줌

```
npx @ionic/cli integrations enable capacitor # or ionic integrations enable capacitor
npx @ionic/cli capacitor add ios # or ionic capacitor add ios
npx @ionic/cli capacitor add android # or ionic capacitor add android
```

## options

```
 ionic: {
    integrations: {
      //
    },
    css: {
      //
    },
    config: {
      //
    }
  },
```
