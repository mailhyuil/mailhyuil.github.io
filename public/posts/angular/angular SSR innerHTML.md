# angular SSG innerHTML

> innerHTML 대신 outerHTML 사용하자
>
> > this.sanitizer.bypassSecurityTrustHtml(url); 로 우회하지 않으면 style 등의 attribute가 사라짐

```html
<div class="w-full>
  <p [outerHTML]="html | safeHtml"></p>
</div>
```
