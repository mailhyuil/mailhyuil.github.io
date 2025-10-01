# angular signal queries (view)

```ts
// @ViewChild
divEl = viewChild<ElementRef>("el");
divEl = viewChild.required<ElementRef>("el");
someComponent = viewChild(SomeComponent);

// @ViewChildren
divEls = viewChildren<ElementRef>("el");

// @ContentChild
divEl = contentChild<ElementRef>("el");

// @ContentChildren
divEls = contentChildren<ElementRef>("el");
```
