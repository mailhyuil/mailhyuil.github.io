# angular directive

> component와 directive의 차이점은 view(template)을 가지고 있는지의 여부이다.
>
> > component는 Directive를 상속받고 view를 가지고 있다.
> >
> > > One key benefit is the ability to quickly create reusable components.
> > > 빠르게 재사용 가능한 컴포넌트를 만들 수 있다.

## directives/click-outside.directive.ts

```
import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({ selector: "[example]" })
export class ExampleDirective {
  constructor(
    private readonly elementRef: ElementRef,
    // private readonly templateRef: TemplateRef<any>,
    // private readonly viewContainer: ViewContainerRef
  ) {}

}
```
