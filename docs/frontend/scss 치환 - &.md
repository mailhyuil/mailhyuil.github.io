# scss 치환 - &

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
