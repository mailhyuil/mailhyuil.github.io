# angular 양방향 바인딩

> FormsModule을 import 해야함

### app.module.ts

```ts
@NgModule({
  imports: [FormsModule],
})
```

### ts

```ts
export class SomeComponent {
  some: string = ""; // 변수 선언
}
```

### html

```html
<!-- [(ngModel)] 양방향 바인딩 -->
<input [(ngModel)]="some" />
<h1>{{some}}</h1>
```
