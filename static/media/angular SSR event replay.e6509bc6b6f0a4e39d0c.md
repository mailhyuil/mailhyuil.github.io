# angular SSR event replay

> 네트워크 환경이 안좋을 때 로딩 중에 발생한 이벤트는 무시된다
>
> > withEventReplay를 사용하면 이벤트를 재생할 수 있다

```ts
bootstrapApplication(App, {
  providers: [provideClientHydration(withEventReplay())],
});
```
