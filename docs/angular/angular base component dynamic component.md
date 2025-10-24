# angular base component dynamic component

> ng-template 의 위치에 viewContainerRef로 넣는 방법
>
> > ng-template 없이 그냥 생성하면 맨 뒤에 추가됨

## component class로 참조

```ts
export class SomeComponent {
  @ViewChild(FileUploadComponent) fileUploadComponent!: FileUploadComponent;
  submit() {
    this.fileUploadComponent.upload();
  }
}
```

## ViewContainerRef 사용

```ts
import { ViewContainerRef } from "@angular/core";
export class SomeComponent {
  constructor(private viewContainerRef: ViewContainerRef);

  public addTable(): void {
    const component = this.viewContainerRef.createComponent(MyComponent);
    component.instance.title = "test";
    component.setInput("value", "test");
  }
}
```

## ng-template 사용

### html

```html
<ng-template #ele></ng-template>
```

### ts

```ts
export class SomeComponent {
  @ViewChild("ele", { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  ref!: ComponentRef<YourChildComponent>;

  addChild() {
    this.ref = this.viewContainerRef.createComponent(YourChildComponent);
  }

  removeChild() {
    const index = this.viewContainerRef.indexOf(this.ref.hostView);
    if (index != -1) this.viewContainerRef.remove(index);
  }
}
```
