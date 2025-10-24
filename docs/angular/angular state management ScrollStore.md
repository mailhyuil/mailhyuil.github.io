# angular state management ScrollStore

## scroll.store.ts

```ts
export class ScrollStore {
  private _scrollPositionState = [0, 0];
  get$ = new Subject<void>();
  set$ = new Subject<void>();

  setScroll(scroll: [number, number]) {
    this._scrollPositionState = scroll;
  }

  getScroll() {
    return this._scrollPositionState;
  }
}

export function PreserveScrollPosition() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const scrollStore = AppComponent.getScrollStore();
      scrollStore.set$.next();
      const result = await originalMethod.apply(this, args);
      scrollStore.get$.next();
      return result;
    };
    return descriptor;
  };
}
```

## layout.component.ts

```ts
export class LayoutComponent implements OnInit {
  @ViewChild("outlet") outlet: ElementRef<HTMLDivElement>;
  constructor(private readonly router: Router, private readonly scrollStore: ScrollStore) {}

  ngOnInit(): void {
    this.scrollStore.set$.subscribe(() => {
      this.scrollStore.setScroll([0, this.outlet.nativeElement.scrollTop]);
    });

    this.scrollStore.get$.subscribe(() => {
      this.outlet.nativeElement.scrollTop = this.scrollStore.getScroll()[1];
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
