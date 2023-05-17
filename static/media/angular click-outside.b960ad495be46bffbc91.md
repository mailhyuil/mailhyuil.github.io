# angular click-outside

```
constructor(private ele: ElementRef<HTMLDivElement>) {}

@HostListener('document:click', ['$event'])
clickout(event: any) {
  if (this.ele.nativeElement.contains(event.target)) {
    this.toggle();
  } else {
    this.close();
  }
}
```
