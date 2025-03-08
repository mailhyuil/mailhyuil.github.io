# angular route withComponentInputBinding

> input을 통해 라우트의 값 (:id, :name 등)을 컴포넌트로 전달하는 방법

## app.config.ts

```ts
provideRouter(
    appRoutes,
    withComponentInputBinding(),
),
```

## app.component.ts

```ts
id = input<string>();
```
