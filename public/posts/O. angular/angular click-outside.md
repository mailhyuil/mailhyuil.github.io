# angular click-outside

```ts
constructor(private ele: ElementRef<HTMLDivElement>) {}

@HostListener('document:mousedown', ['$event'])
clickout(event: any) {
  if (this.ele.nativeElement.contains(event.target)) {
    this.toggle();
  } else {
    this.close();
  }
}
```
