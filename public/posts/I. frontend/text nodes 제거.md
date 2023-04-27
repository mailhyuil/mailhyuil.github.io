# text nodes 제거

```
 const sliders: HTMLDivElement[] = Array.from(container.value?.childNodes).filter((e) => e.nodeType !== Node.TEXT_NODE) as HTMLDivElement[];
```
