# Nuxt built-in composables

## useAppConfig

> reactive app config에 접근

## useAsyncData

> 데이터에 비동기적으로 접근

## useFetch

> useAsyncData 와 $fetch의 Wrapper
>
> > fetch와 사용법은 같다
> >
> > > option {pick:[]}을 이용해서 원하는 데이터만 추출할 수 있다.

```
const getMovies = async () => {
  const { data } = await useFetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/`,
    { pick: ["data"] }
  );
  console.log(data);
};
```

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

> 현재 페이지의 route를 담은 객체 반환
>
> > setup 에서만 사용

## useRouter

> router 인스턴스를 반환
>
> > setup 에서만 사용

## useRuntimeConfig

## useState

> simple key-based system 사용하여 state를 전역으로 관리
>
> > 대신 Pinia를 많이 사용

```
// In one component
const sharedState = useState('share-this', 'default value');

// In another component
const alsoSharedState = useState('share-this');
```
