# angular ChangeDetectionStrategy OnPush로 전체 설정

```ts
import { NgModule, DEFAULT_CDR } from "@angular/core";

@NgModule({
  providers: [{ provide: DEFAULT_CDR, useValue: { defaultChangeDetection: ChangeDetectionStrategy.OnPush } }],
})
export class AppModule {}
```
