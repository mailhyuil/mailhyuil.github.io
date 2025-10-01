# js memory leak 방지

```sh
addEventListener -> removeEventListener
Observer -> unsubscribe # (rxjs, IntersectionObserver, ResizeObserver, MutationObserver)
Promise -> resolve, reject # (resolve, reject를 안하면 Promise가 계속 쌓이게된다.),
setTimeout, setInterval -> clearSetTimeout, clearSetInterval
```
