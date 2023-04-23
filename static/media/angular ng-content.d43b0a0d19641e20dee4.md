# ng-content

## html

```html
<ng-content></ng-content>
```

## ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
})
export class SomeComponent {}
```

## 사용

```
<some>
    add something!
</some>
```
