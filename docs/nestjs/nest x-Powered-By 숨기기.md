# nest x-Powered-By 숨기기

> http header에 x-powered-by가 있으면 보안상 취약점이 될 수 있다

## main.ts

```ts
app.disable("x-powered-by");
```

## helmet 사용

```ts
app.use(helmet());
```
