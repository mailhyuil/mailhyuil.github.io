# angular cookie

## install

```sh
npm i ngx-cookie-service
```

## 사용

```ts
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

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
