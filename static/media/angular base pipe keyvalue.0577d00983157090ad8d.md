# angular base pipe keyvalue

> object를 i.key, i.value로 만들어주는 파이프

```html
<div *ngFor="let i of object | keyvalue"> {{i.key}} : {{i.value}} </div>
```
