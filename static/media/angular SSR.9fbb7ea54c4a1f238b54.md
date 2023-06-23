# angular SSR

> 브라우저 명령어는 Location, DOCUMENT 같은 angular API를 사용해야함
>
> > 반드시 절대 패스 값을 사용해야한다.

## install

```
ng add @nguniversal/express-engine
```

## AppModule

```
import {provideClientHydration} from '@angular/platform-browser';
// ...

@NgModule({
  // ...
  providers: [ provideClientHydration() ],  // add this line
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // ...
}
```

## start

```
npm run dev:ssr
```

## 브라우저 기능 사용

```
constructor(@Inject(DOCUMENT) private document: Document) {}
```
