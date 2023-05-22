# angular SSR

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
