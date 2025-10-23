# angular i18n ngx-translate

## install

```sh
npm i @ngx-translate/core
npm i @ngx-translate/http-loader
```

## app.config.ts

```ts
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideTranslateService, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, "./i18n/", ".json");

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: "ko",
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
};
```

## app.component.ts

```ts
import { Component } from "@angular/core";
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import translationsKO from "../../public/i18n/ko.json";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(["ko", "en"]);
    translate.setTranslation("ko", translationsKO);
    this.translate.setDefaultLang("ko");
    this.translate.use("ko");
  }
}
```
