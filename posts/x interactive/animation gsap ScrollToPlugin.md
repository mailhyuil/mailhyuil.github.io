# gsap scrollTo

> 주의사항: css의 scroll-behavior: smooth !important; 속성을 함께쓰면 속도를 제어할 수 없어진다.

```js
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

gsap.to(window, { duration: 3, scrollTo: hi.value });
```
