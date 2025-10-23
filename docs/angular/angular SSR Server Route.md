# angular SSR Server Route

> 새로운 SSR,SSG,CSR을 설정하는 방법

## angular.routes.server.ts

```ts
import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Server, // Client, Prerender, Server
  },
];
```
