# gsap scrollTo

> css // scroll-behavior: smooth !important; 랑 함께쓰면 안된다
>
> > 속도를 제어할 수 없어진다.

```
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

gsap.to(window, { duration: 3, scrollTo: hi.value });
```
