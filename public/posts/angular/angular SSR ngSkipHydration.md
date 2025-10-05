# angular SSR hydration

> 서버에서 생성된 HTML, 데이터, 상태값 등을 클라이언트에서 되찾아 사용하는 일련의 과정
>
> > innerHTML을 사용 시

## ts

```txt
host: { ngSkipHydration: "true"; }
```

## html

```html
<p ngSkipHydration class="h-32 font-semibold text-gray-400" [innerHTML]="faq.answer"></p>
```
