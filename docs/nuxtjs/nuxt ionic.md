# nuxt ionic

## install

```
yarn add --dev @nuxtjs/ionic
```

## 넉스트 실행

> 실행을 하면 inonic config 파일이 생성된다

```
yarn dev
```

## nuxt.config.ts

```
modules: ['@nuxtjs/ionic']
```

## capacitor

> android 나 ios 플랫폼으로 사용할 수 있게 해줌

```
npx @ionic/cli integrations enable capacitor
npx @ionic/cli capacitor add ios
npx @ionic/cli capacitor add android
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
