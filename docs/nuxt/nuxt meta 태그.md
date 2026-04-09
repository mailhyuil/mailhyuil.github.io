# nuxt meta 태그

> SEO에 활용

## useHead

```ts
useHead({
  title: "",
});
```

## useSeoMeta

```ts
useSeoMeta({
  title: "상품 상세 페이지",
  ogTitle: "세일 중인 상품!",
  description: "지금 바로 확인하세요.",
  ogImage: "/images/product.jpg",
});
```

### template 안에 설정하는 방식도 있음

```vue
<template>
  <div>
    <Head>
      <Title>mypage</Title>
    </Head>
  </div>
</template>
```

## definePageMeta

해당 페이지의 라우팅, 레이아웃, 미들웨어 등 Nuxt 앱 자체의 동작을 정의

```ts
definePageMeta({
  layout: "custom", // 커스텀 레이아웃 사용
  middleware: "auth", // 인증 미들웨어 적용
  pageTransition: false, // 페이지 전환 애니메이션 끄기
  alias: ["/old-path"], // 다른 URL로도 접근 가능하게 설정
});
```

## nuxt.config.ts에서 전역으로 설정하는 방식

```ts
export default defineNuxtConfig({
  app: {
    head: {
      title: "my-page",
      meta: [
        { "http-equiv": "content-security-policy", content: "upgrade-insecure-requests" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "전남 광주에 있는 하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작(개발)해드립니다.",
        },
        {
          name: "keywords",
          content:
            "광주,앱,하이브리드앱,웹,erp,cms,관리자페이지,프로그램,pc프로그램,어플리케이션,제작,홈페이지,웹페이지,웹사이트,개발자,개발,개발회사",
        },
        { name: "naver-site-verification", content: "fd56654d5795d7debd55c5f8140085c78cf4acb8" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://developers.lepisode.team" },
        { property: "og:title", content: "my-page" },
        { property: "og:image", content: "https://lepisode.team/assets/images/ogimage.png" },
        {
          property: "og:description",
          content:
            "하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다.",
        },
        { property: "og:site_name", content: "my-page" },
        { property: "og:locale", content: "ko_KR" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "canonical", href: "https://developers.lepisode.team" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
      script: [{ async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-KLKBZ2X986", children: onload }],
    },
  },
});
```
