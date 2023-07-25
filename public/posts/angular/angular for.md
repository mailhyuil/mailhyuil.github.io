# angular for

```html
<div *ngFor="let i of list; let i = index"></div>
```

## trackBy 최적화

```ts
@Component({
  selector: "my-app",
  template: `<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>`,
})
export class MyApp {
  items: [];

  trackByFn(index, item) {
    return item.id;
  }
}
```
