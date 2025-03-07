# angular ChangeDetectorRef

> 변경 감지를 동적으로 변경할 수 있게 하기 위해 사용
>
> > detach를 하게 되면 zone.js가 감시를 하지 않는다.
> >
> > > markForCheck은 자신이 호출된 컴포넌트에서만 @Input 변경을 감지!!!
> > >
> > > > 부모에서 변경을 했다면 Subject같은 것을 사용해서 자식에게 알려줘야 한다.

```ts
import { ChangeDetectorRef } from "@angular/core";

cdr = inject(ChangeDetectorRef);

cdr.markForCheck(); // OnPush 전략에서 변경을 감지하고 렌더링
cdr.detectChanges(); // 자신과 모든 자식 컴포넌트까지 그 즉시 변경 렌더링 수행
```
