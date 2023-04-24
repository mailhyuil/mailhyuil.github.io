# angular pipe

## /pipes/some.pipe.ts

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "some",
  standalone: true,
})
export class SomePipe implements PipeTransform {
  transform(size: number, suffix: string = "MB"): unknown {
    return (size / (1024 * 1024)).toFixed(2) + suffix;
  }
}
```
