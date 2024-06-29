# nx webpack module federation

## remote

### webpack.config.js

```js
import { withModuleFederation } from "@nx/angular/module-federation";
import { ModuleFederationConfig } from "@nx/webpack";

const config: ModuleFederationConfig = {
  name: "login",
  exposes: {
    "./Routes": "apps/login/src/app/remote-entry/entry.routes.ts",
  },
};

export default withModuleFederation(config);
```

### routes.ts

```ts
import { Route } from "@angular/router";
import { RemoteEntryComponent } from "./entry.component";

export const remoteRoutes: Route[] = [{ path: "", component: RemoteEntryComponent }];
```

### app.config.ts

```ts
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { remoteRoutes } from "./remote-entry/entry.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(remoteRoutes)],
};
```

## host

### webpack.config.js

```js
import { withModuleFederation } from "@nx/angular/module-federation";
import { ModuleFederationConfig } from "@nx/webpack";

const config: ModuleFederationConfig = {
  name: "dashboard",
  remotes: [],
};

export default withModuleFederation(config);
```

### routes.ts

> loadRemoteModule 함수는 module federation을 통해 remote module을 로드한다.

```ts
import { Route } from "@angular/router";
import { loadRemoteModule } from "@nx/angular/mf";
import { AppComponent } from "./app.component";

export const appRoutes: Route[] = [
  {
    path: "login",
    loadChildren: () => loadRemoteModule("login", "./Routes").then((m) => m.remoteRoutes),
  },
  {
    path: "",
    component: AppComponent,
  },
];
```

### module-federation.manifest.json

> module federation manifest 파일을 통해서 remote module의 경로를 정의한다.

```json
{
  "login": "http://localhost:4201"
}
```

### main.ts

> module-federation.manifest.json 파일을 fetch하여 setRemoteDefinitions 함수를 통해 remote module을 정의한다.
>
> > import가 아닌 fetch를 사용하는 이유는 module federation manifest 파일을 빌드 시점에 생성하기 때문이다.

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { setRemoteDefinitions } from "@nx/angular/mf";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

fetch("/assets/module-federation.manifest.json")
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));
```

## component

```ts
@Component({
  selector: "app-host",
  template: ` <div #buttonContainer></div> `,
})
export class HostComponent implements OnInit {
  @ViewChild("buttonContainer", { read: ViewContainerRef }) buttonContainer: ViewContainerRef;

  async ngOnInit() {
    const { ButtonComponent } = await loadRemoteModule("login", "./button");
    this.buttonContainer.createComponent(ButtonComponent);
  }
}
```
