# angular cookie

## install

```sh
npm i ngx-cookie
```

## app.module.ts

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CookieModule } from "ngx-cookie";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, CookieModule.withOptions()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## 사용

```ts
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie";

@Component({
  selector: "my-very-cool-app",
  template: "<h1>My Angular App with Cookies</h1>",
})
export class AppComponent {
  constructor(private cookieService: CookieService) {}

  getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
```
