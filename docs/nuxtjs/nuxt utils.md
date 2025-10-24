# nuxt utils

## definePageMeta

> script에 definePageMeta를 사용하여 레이아웃을 지정해준다.

```
definePageMeta({ layout: "blank" });
```

## defineNuxtRouteMiddleware

> 라우트 미들웨어를 생성
>
> > middleware 폴더에 생성
> >
> > > to, from 매개변수로 라우팅 엔드포인트 설정

```ts
export default defineNuxtRouteMiddleware(async (to, from) => {

}
```

## navigateTo()

> `/notice/[id].vue`
>
> > `/notice/${id}`로 navigating
