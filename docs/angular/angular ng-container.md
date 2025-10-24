# angular ng-container

> ng-container는 DOM, CSS에 영향을 주지 않는다.

```html
<ng-container>
  <h1>hi</h1>
</ng-container>

<!-- result -->
<h1>hi</h1>
```

## ngTemplateOutlet

> template을 재사용하는 용도로 사용할 수 있다.

```html
<ng-container *ngTemplateOutlet="template"></ng-container>
<ng-template #template>Hello!</ng-template>
```
