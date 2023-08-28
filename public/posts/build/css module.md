# css module

## css

```
/* style.css */
.className {
  color: green;
}
```

## js

```
import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';
```
