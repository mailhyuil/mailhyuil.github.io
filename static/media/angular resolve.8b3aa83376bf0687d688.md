# angular resolve

## main.ts

```ts
provideRouter(
  appRoutes,
  withEnabledBlockingInitialNavigation(),
  withComponentInputBinding()
),
```

## app.routes.ts

```ts
{
  path: '',
  loadComponent: () =>
    import('./pages/dashboard/dashboard.page').then(
      (m) => m.DashboardPage
    ),
  resolve: { contact: () => '하이하이' },
},
```

## component.ts

```ts
export class DashboardPage {
  @Input() contact?: string;
}
```
