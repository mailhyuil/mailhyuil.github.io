# angular base token LOCALE_ID

> 전체 앱에 대한 로케일을 설정합니다.
>
> > registerLocaleData, LOCALE_ID 둘 다 적용해줘야한다.

## app.component.ts

```ts
import { registerLocaleData } from "@angular/common";
import localeKo from "@angular/common/locales/ko";
import localeKoExtra from "@angular/common/locales/extra/ko";

registerLocaleData(localeKo, "ko-KR", localeKoExtra);

@Component({})
export class AppComponent {}
```

## app.config.ts

```ts
import { LOCALE_ID } from "@angular/core";

// default : en-US
{ provide: LOCALE_ID, useValue: "ko-KR" }
```

## dynamic 설정

```ts
{
  provide: LOCALE_ID,
  deps: [SettingsService],  //some service handling global settings
  useFactory: (settingsService) => settingsService.getLanguage()  //returns locale string
}
```
