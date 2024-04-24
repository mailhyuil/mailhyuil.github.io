# angular LOCALE_ID

> 전체 앱에 대한 로케일을 설정합니다.

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
