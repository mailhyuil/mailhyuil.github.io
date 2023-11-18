# angular dynamic component

> ng-template 의 위치에 viewContainerRef로 넣는 방법
> ng-template 없이 그냥 생성하면 맨 뒤에 추가됨

## html

```html
<ng-template #viewContainerRef></ng-template>
```

## ts

```ts
@ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
ref!: ComponentRef<YourChildComponent>

addChild() {
  this.ref = this.vcr.createComponent(YourChildComponent)
}

removeChild() {
  const index = this.vcr.indexOf(this.ref.hostView)
  if (index != -1) this.vcr.remove(index)
}
```

## ng-template 없이

```ts
import {ViewContainerRef} from '@angular/core';

constructor(private viewContainerRef: ViewContainerRef)

public addTable(): void {
   const component = this.viewContainerRef.createComponent(MyComponent);
   component.instance.title = 'test';
   component.setInput('value', 'test');
}
```
