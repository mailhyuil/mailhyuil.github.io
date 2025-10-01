# css clip-path round

```js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#animated-button div");

  // GSAP 애니메이션
  const animation = gsap.timeline({ paused: true });
  animation.to(button, {
    "--progress": 1, // CSS 변수 변경
    duration: 0.5, // 애니메이션 시간
    clipPath: "inset(0% 0% round 1.8rem)", // 최종 상태
    ease: "power1.inOut",
  });

  // Hover 이벤트
  button.parentElement.addEventListener("mouseenter", () => animation.play());
  button.parentElement.addEventListener("mouseleave", () => animation.reverse());
});
```
