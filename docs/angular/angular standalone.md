# angular standalone

> module -> standalone: true

## app/app.routes.ts

```ts
import { Routes } from "@angular/router";
import { DefaultLayout } from "./layouts/default/default.layout";

export const routes: Routes = [
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/home/home.page").then((m) => m.HomePage),
      },
    ],
  },
];
```

## main.ts

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
```
