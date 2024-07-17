# scss 중첩

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
