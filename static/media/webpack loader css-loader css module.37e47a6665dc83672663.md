# css to js module

## css

```css
/* styles.css */
body {
  background-color: lightgray;
}
```

## css to js module

```js
// styles.js
const styles = `
  body {
    background-color: lightgray;
  }
`;

export default styles;
```

## html에 style 태그로 삽입

```js
// app.js
import { styles } from "./styles.js";

const styleTag = document.createElement("style");
styleTag.textContent = styles;
document.head.appendChild(styleTag);
```
