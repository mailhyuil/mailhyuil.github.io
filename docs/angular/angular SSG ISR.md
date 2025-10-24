# angular SSG ISR

> SSG와 같지만 SSG는 빌드 시에 한번 ISR은 주기적으로 렌더링하여 캐싱

## install

```sh
npm install @rx-angular/isr
```

## server.config.ts

```ts
import { provideISR } from "@rx-angular/isr/server";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideISR(), // 👈 Register ISR providers
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
```

## server.ts

```ts
import { ISRHandler } from "@rx-angular/isr/server";

export function app(): express.Express {
  // Other Angular Universal setup code (removed for brevity)...

  const isr = new ISRHandler({
    indexHtml, // 👈 The index.html file
    invalidateSecretToken: process.env["INVALIDATE_TOKEN"] || "TOKEN", // 👈 The secret token used to invalidate the cache
    enableLogging: !environment.production, // 👈 Enable logging in dev mode
  });

  server.get(
    "*",
    async (req, res, next) => await isr.serveFromCache(req, res, next),
    async (req, res, next) => await isr.render(req, res, next)
  );

  // remove Angular render handler as we will use the one from isr
  (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  };

  return server;
}
```

## app.routes.ts

```ts
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { revalidate: 10 }, // 10초
  },
];
```
