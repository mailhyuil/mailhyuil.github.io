# angular pipe safe

> unsafe value used in a resource URL context 에 사용

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "safe",
  standalone: true,
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
```
