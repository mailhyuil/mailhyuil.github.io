# angular directive

> component와 directive의 차이점은 view(template)을 가지고 있는지의 여부이다.
>
> > component도 일종의 directive이다.

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
