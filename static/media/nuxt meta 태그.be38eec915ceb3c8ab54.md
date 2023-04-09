# META TAG

> SEO에 활용

## template 안에 설정

```
<div>
    <Head>
      <Title>mypage</Title>
    </Head>
</div>
```

## useHead

```
useHead({
    title:''
    })
```

## define

```
definePageMeta({
  title: 'AI 링크'
})
```

## nuxt.config.ts

```
app: {
        head: {
            title: 'my-page',
            meta: [
                { "http-equiv": "content-security-policy", content: 'upgrade-insecure-requests' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { charset:'utf-8'},
                { name:'description', content:"전남 광주에 있는 하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작(개발)해드립니다."},
                { name:'keywords', content:"광주,앱,하이브리드앱,웹,erp,cms,관리자페이지,프로그램,pc프로그램,어플리케이션,제작,홈페이지,웹페이지,웹사이트,개발자,개발,개발회사"},
                { name:'naver-site-verification', content:"fd56654d5795d7debd55c5f8140085c78cf4acb8"},
                { property:"og:type", content:"website"},
                { property:"og:url", content:"https://developers.lepisode.team"},
                { property:"og:title", content:"my-page"},
                { property:"og:image", content:"https://lepisode.team/assets/images/ogimage.png"},
                { property:"og:description", content:"하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다."},
                { property:"og:site_name", content:"my-page"},
                { property:"og:locale", content:"ko_KR"},
                { property:"og:image:width", content:"1200"},
                { property:"og:image:height", content:"630"},
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'canonical', href: 'https://developers.lepisode.team' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            ],
            script: [
                { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-KLKBZ2X986", children: onload }
            ],

        },
    },
```
