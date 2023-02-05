# locomotive + gsap

```js
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locoContainer"),
  smooth: true,
  smoothMobile: true,
  lerp: 0.07,
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".locoContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".locoContainer").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

/* 
scrollTrigger: {
    scroller: ".locoContainer",  
} 
*/
```
