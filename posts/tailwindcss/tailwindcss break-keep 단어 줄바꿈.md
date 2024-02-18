# tailwindcss 단어 줄바꿈 break-keep

> Chinese/Japanese/Korean (CJK) text에만 적용됨
>
> > For non-CJK text break-keep has the same behavior as break-normal.
> >
> > non-CJK text에는 break-normal로 적용됨

```css
@layer base {
  html {
    @apply break-keep;
  }
}
```
