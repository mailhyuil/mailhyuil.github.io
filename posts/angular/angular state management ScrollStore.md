# ScrollStore

## scroll.store.ts

```ts
export class ScrollStore {
  private scrollPositionState = [0, 0];
  get$ = new Subject<void>();
  set$ = new Subject<void>();

  setScroll(scroll: [number, number]) {
    this.scrollPositionState = scroll;
  }
}
```

## layout.component.ts

```ts
export class LayoutComponent implements OnInit {
  @ViewChild("outlet") outlet: ElementRef<HTMLDivElement>;
  constructor(private readonly router: Router, private readonly scrollStore: ScrollStore) {}

  ngOnInit(): void {
    this.scrollStore.setScroll$.subscribe(() => {
      this.scrollStore.setScroll([0, this.outlet.nativeElement.scrollTop]);
    });

    this.scrollStore.getScroll$.subscribe(() => {
      this.outlet.nativeElement.scrollTop = this.scrollStore.scroll()[1];
    });
  }
}
```

## layout.component.html

```html
<div #outlet class="flex-1 overflow-y-auto" (scroll)="onScroll($event)">
  <router-outlet />
</div>
```
