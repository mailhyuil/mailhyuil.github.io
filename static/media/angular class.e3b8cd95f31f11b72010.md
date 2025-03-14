# angular class

```html
<div [ngClass]="{'bg-blue-500': true, 'bg-red-500': false}"></div>

<div [ngClass]="true ? 'bg-blue-500' : 'bg-red-500'"></div>

<div [ngClass]="[text-blue-100, bg-blue-500]"></div>

<div [class.grey]="true"></div>
```
