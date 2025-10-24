# scss @import

## data type

```sh
number
string
color
boolean
null
list
map

$boolean: true;
$string: hello;
$color: red;
$number: 720;
$list: red, orange, yellow, green, blue;
$map: (
  l: light,
  d: dark,
);
```

## 중첩

```scss
/* SCSS */
.section {
  width: 100%;

  .list {
    padding: 20px;

    li {
      float: left;
    }
  }
}

/* result.css */
.section {
  width: 100%;
}

.section .list {
  padding: 20px;
}

.section .list li {
  float: left;
}
```

# 치환 (&)

```scss
/* SCSS */
.btn {
  position: absolute;

  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}

/* result.css */

.btn {
  position: absolute;
}

.btn.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}

/* SCSS */
.fs {
  &-small {
    font-size: 12px;
  }

  &-medium {
    font-size: 14px;
  }

  &-large {
    font-size: 16px;
  }
}

/* result.css */
.fs-small {
  font-size: 12px;
}

.fs-medium {
  font-size: 14px;
}

.fs-large {
  font-size: 16px;
}
```

## 변수 ($)

```scss
/* SCSS */
$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}

/* result.css */

.box {
  width: 200px;
  margin-left: 200px;
  background: #e96900 url("/assets/images/bg.jpg");
}
```

## mixin

> css를 재사용

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
