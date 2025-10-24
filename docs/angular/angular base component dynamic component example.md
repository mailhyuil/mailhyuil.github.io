# angular base component dynamic component example

```ts
  ngAfterViewInit(): void {
    setTimeout(() => {
      const text = '<p>Hello</p><p>{{My/Good/Best}}</p><p>World</p>';
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const eles = Array.from(doc.body.children);
      eles.forEach((ele) => {
        if (ele.textContent.startsWith('{{')) {
          const text = ele.textContent.replace('{{', '').replace('}}', '');
          const words = text.split('/');
          const component = this.viewContainerRef.createComponent(AccordionComponent);
          component.instance.header = words[0];
          doc.body.replaceChild(component.location.nativeElement, ele);
        }
      });
    });
  }
```
