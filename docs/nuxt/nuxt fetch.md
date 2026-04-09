# nuxt fetch

## $fetch

일반적인 fetch 함수
ssr을 사용중이라면 fetch가 서버에서 한번 클라에서 한번 총 두번 실행된다.

## useFetch

중복 fetch를 방지
서버에서 fetch후 클라에서 결과를 hydrate한다.

## Custom useFetch

```ts
export const useAPI = createUseFetch({
  baseURL: "https://api.nuxt.com",
  onRequest({ options }) {
    const { session } = useUserSession();
    if (session.value?.token) {
      options.headers.set("Authorization", `Bearer ${session.value.token}`);
    }
  },
  async onResponseError({ response }) {
    if (response.status === 401) {
      await navigateTo("/login");
    }
  },
});
```

## useAsyncData

setup function, plugin, 또는 route middleware 에서만 사용이 가능
실행 컨텍스트를 갖는다, 예를 들어 페이지가 변경되어 param이 변경되면 useFetch는 이전 param으로 다시 실행되지만 useAsyncData는 바뀐 param으로 실행된다.
