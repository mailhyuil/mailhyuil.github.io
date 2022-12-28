# Nuxt built-in composables

## useAppConfig

> reactive app config에 접근

## useAsyncData

> 데이터에 비동기적으로 접근

## useFetch

> useAsyncData와 $fetch를 감싼 래퍼 객체를 제공

## useLazyAsyncData

> 핸들러가 찾아지기 전에 useAsyncData를 감싼 래퍼객체를 반환
>
> > lazy 옵션이 true일 때

## useLazyFetch

> useFetch를 감싼 래퍼객체 반환
>
> > lazy 옵션이 true일 때

## useCookie

> SSR-friendly하게 쿠키를 쓰거나 읽을 수 있다

## useError

> 글로벌 nuxt 에러를 핸들링

## useHead

> 커스텀 <head/>를 추가할 수 있다

## useHydration

> hydration cycle을 컨트롤 할 수 있다.

## useNuxtApp

> 컨텍스트에 런타임에 접근할 수 있다

## useNuxtData

> useAsyncData, useLazyAsyncData, useFetch and useLazyFetch의 최근 캐시된 값에 접근할 수 있다

## useRequestEvent

> 리퀘스트에 접근할 수 있다.

## useRequestHeaders

> 리퀘스트 헤더에 접근할 수 있다.

## useRoute

> 현재 route를 반환
>
> > setup 에서만 사용
> >
> > > template에서는 $route로 사용 가능

## useRouter

> router 인스턴스를 반환
>
> > setup 에서만 사용
> >
> > > template에서는 $router로 사용 가능

## useRuntimeConfig

## useState

> key
