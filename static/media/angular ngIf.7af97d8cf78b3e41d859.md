# angular ngIf

## if

```html
<div *ngIf="true"></div>
```

## if else

```html
<div *ngIf="A === true; else B"> A </div>

<ng-template #B> B </ng-template>
```

## else if

```html
<ng-template [ngIf]="A===true" [ngIfElse]="B">
  <div> A </div>
</ng-template>

<ng-template #B>
  <div> B </div>
</ng-template>
```
