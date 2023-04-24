# angular standalone

> module 없이 사용할 수 있는 컴포넌트
>
> > standalone: true

## some.component.ts

```ts
@Component({
  selector: "app-some",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
})
export class SomeComponent {}
```
