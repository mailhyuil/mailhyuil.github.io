# angular resolve

## main.ts

```
provideRouter(
  appRoutes,
  withEnabledBlockingInitialNavigation(),
  withComponentInputBinding()
),
```

## app.routes.ts

```
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

```
export class DashboardPage {
  @Input() contact?: string;
}
```
