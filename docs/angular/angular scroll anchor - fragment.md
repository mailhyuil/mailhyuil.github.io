# angular scroll anchor - fragment

> fragment를 사용해서 원하는 section으로 스크롤을 이동시킬 수 있다.

## app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
    ),
  ],
};
```

## navigation

```html
<div routerLink="" routerLinkActive="text-red-500" fragment="gray">gray</div>
<div routerLink="" routerLinkActive="text-red-500" fragment="green">green</div>
<div routerLink="" routerLinkActive="text-red-500" fragment="yellow">yellow</div>
```

## page

```html
<div>
  <div id="gray" class="h-64 bg-gray-300">gray</div>
  <div id="green" class="h-64 bg-green-300">green</div>
  <div id="yellow" class="h-64 bg-yellow-300">yellow</div>
</div>
```

## smooth scroll

> style.scss

```scss
html {
  scroll-behavior: smooth;
}
```
