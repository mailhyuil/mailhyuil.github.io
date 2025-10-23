# angular ViewChild & ViewChildren

```ts
@ViewChild('ele') ele: ElementRef<HtmlDivElement>;
@ViewChildren('ele') ele: QueryList<ElementRef<HtmlDivElement>>;

ele = viewChild('ele')
ele = viewChildren('ele')
```
