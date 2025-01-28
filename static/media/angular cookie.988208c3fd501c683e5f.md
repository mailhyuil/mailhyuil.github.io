# angular cookie

## install

```sh
npm i ngx-cookie-service
```

## usage

```ts
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "my-very-cool-app",
  template: "<h1>My Angular App with Cookies</h1>",
})
export class AppComponent {
  cookieService = inject(CookieService);

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  deleteCookie(key: string) {
    this.cookieService.delete(key, "/"); // path 넣어주기
  }
}
```
