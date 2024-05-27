# scss @mixin & @include

> css를 재사용

## @mixin

```scss
/* 선언 - @mixin */
@mixin large-text {
  font: {
    size: 22px;
    weight: bold;
    family: sans-serif;
  }
  color: orange;

  &::after {
    content: "!!";
  }

  span.icon {
    background: url("/images/icon.png");
  }
}

/* 사용 - @include */
h1 {
  @include large-text;
}

div {
  @include large-text;
}
```

## @include

```scss

```
