# angular directive

## directives/click-outside.directive.ts

```ts
import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({ selector: "[example]" })
export class ExampleDirective {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) {}
}
```
