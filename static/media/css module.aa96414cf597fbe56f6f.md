# css module

> > css 파일을 js로 import하여 사용할 수 있다.

## css

```css
/* style.css */
.className {
  color: green;
}
```

## js

```js
import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';
```
