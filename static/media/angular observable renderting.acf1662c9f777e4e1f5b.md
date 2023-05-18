# angular observable rendering

```html
<div *ngIf="user$ | async as user">
  <div *ngFor="let i of user.items"></div>
</div>
```
