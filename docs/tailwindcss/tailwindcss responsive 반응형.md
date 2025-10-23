# tailwindcss 반응형 font-size

> rem은 root의 font-size를 기준으로 한다.
>
> > root의 font-size를 변경하여 반응형 구현

## global.css

## tailwindcss 사용 시

```css
@layer base {
  html {
    font-size: 12px;
  }

  @screen sm {
    html {
      font-size: 14px;
    }
  }

  @screen lg {
    html {
      font-size: 16px;
    }
  }
}
```

## plain css 사용 시

```css
html {
  font-size: 14px;
}

@media (min-width: 420px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}
```
