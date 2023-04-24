# ng-container && ng-template

> ng-container는 그냥 분리용

## ng-template

```html
<ng-template [ngIf]='isOpen'>
  <h1>hi</h1>
</ng-template>

<!-- shorthand -->
<h1 *ngIf="isOpen">hi</hi>
```
