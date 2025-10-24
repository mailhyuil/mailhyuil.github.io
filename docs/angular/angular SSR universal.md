# angular SSR universal

> 사이트에 처음 접속하는 home 화면이라면 최소한의 데이터만 받아서 데이터 받는 시간을 줄여야한다.
>
> > 반드시 절대 패스 값을 사용해야한다.
> >
> > > ssr을 설정한 후 http request를 보내면 서버에서 렌더링된 html을 받아온다.
> > >
> > > > Angular Universal does not have a server function. In fact, you can load server code anywhere. You just have to use check for Server or Browser
> > > >
> > > > 앵귤러 유니버셜은 서버 함수를 가지고 있지 않다. 사실, 서버 코드를 어디서든 로드할 수 있다. 단지 서버나 브라우저인지 확인해야 한다.

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
