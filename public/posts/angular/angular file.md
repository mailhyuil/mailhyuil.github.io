# angular file

> ngModel 대신 change 이벤트를 사용해야한다..!

## html

```html
<input type="file" (change)="onChange($event.target.files)" />
```
