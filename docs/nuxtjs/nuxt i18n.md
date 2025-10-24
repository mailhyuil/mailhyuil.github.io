# nuxt i18n

> internationalization

[i18n documentation](https://v8.i18n.nuxtjs.org/getting-started/basic-usage)

## install

```
yarn add --dev @nuxtjs/i18n@next
```

## nuxt.config.ts

```
modules: [
    '@nuxtjs/i18n',
],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: "ko",
      messages: Messages,
    },
  },
```

## message.const.js

```
export const Messages = {
  ko: {
    header: {
      intro: "회사소개",
    },
  },
  en: {
    header: {
      intro: "COMPANY",
    },
  },
};

```

## vue

```vue
<script lang="ts" setup>
const { setLocale, locale } = useI18n();
</script>

<template>
  {{ $t('header.intro') }}

  <div class="flex gap-3 items-center">
    <Icon class="text-white w-5 h-5" name="heroicons:globe-alt"></Icon>
    <p class="cursor-pointer text-white font-mono text-sm transition-all" :class="locale === 'ko' ? 'border-b-[3px]' : 'opacity-50'" @click.prevent.stop="setLocale('ko')">K r</p>
    <p class="cursor-pointer text-white font-mono text-sm transition-all" :class="locale === 'en' ? 'border-b-[3px]' : 'opacity-50'" @click.prevent.stop="setLocale('en')">E n</p>
  </div>
</template>
```

## script에서 사용

```
const { t } = useI18n();
console.log(t('header.company.items.aboutus'));
```
