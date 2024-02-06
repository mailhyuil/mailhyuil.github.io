# ng-content

## html

```html
<div>
  <ng-content></ng-content>
  <ng-content select="[header]"></ng-content>
</div>
```

## 사용

```html
<app-some>
  <div header>
    <h1>Header</h1>
  </div>
  <p>add something!</p>
</app-some>
```
