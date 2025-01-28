# tailwindcss 자식 스타일 적용

> 부모에서 \*: 를 사용하면 자식에게 적용됨

```html
<ul class="*:text-red-500">
  <li>Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
</ul>

<ul class="hover:*:text-red-500">
  <li>Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
</ul>
```
