# nx angular ssr

## generate

```
nx g setup-ssr ... --dry-run
```

## main.ts

```ts
providers: [
    provideClientHydration(),
],
```
