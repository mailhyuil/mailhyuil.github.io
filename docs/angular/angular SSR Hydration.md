# angular SSR Hydration

> SSR된 HTML, Data 등을 클라이언트에서 재사용하여 초기 로드 성능 향상
>
> > js가 로드되어 실행될 때 발생한다.

## main.ts

```ts
import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
...
bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});
```
