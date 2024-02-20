# angular universal

> 사이트에 처음 접속하는 home 화면이라면 최소한의 데이터만 받아서 데이터 받는 시간을 줄여야한다.
>
> > 반드시 절대 패스 값을 사용해야한다.
> >
> > > ssr을 설정한 후 http request를 보내면 서버에서 렌더링된 html을 받아온다.

## configs

```ts
// main.ts
const appConfig = {
  providers: [
    provideRouter(appRoutes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        // cacheOptions
        includePostRequests: true,
      })
    ),
    provideHttpClient(),
  ],
};

// main.server.ts
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()), // Server에서는 fetch api가 권장된다.
  ],
};
export const config = mergeApplicationConfig(appConfig, serverConfig);
```

## 브라우저 API 사용

> window, document, location, navigator

```ts
constructor(@Inject(DOCUMENT) private document: Document) {}
```
