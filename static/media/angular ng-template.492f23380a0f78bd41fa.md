# ng-container && ng-template

> template
>
> > 기본으로 hidden 상태이다.
> >
> > > *ngIf, *ngFor은 template의 shortcut이다.

## ng-template

```html
<ng-template [ngIf]="isOpen">
  <h1>hi</h1>
</ng-template>

<!-- shorthand -->
<h1 *ngIf="isOpen">hi</h1>
```
