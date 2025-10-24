# nx angular SSR

## generate

```sh
nx g setup-ssr ... --dry-run
```

## main.ts

```ts
providers: [
    provideClientHydration(),
],
```
