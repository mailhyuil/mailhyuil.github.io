# gsap random floating

```js
const arr = gsap.utils.toArray(".hi");

arr.forEach(object => {
  gsap.to(object, {
    duration: 1 + Math.random() * 0.5, // Random duration between 2 and 5 seconds
    y: () => Math.random() * 20, // Random Y position within the viewport height
    repeat: -1, // Repeat the animation indefinitely
    ease: "power1.inOut", // Easing function for a natural movement
    yoyo: true, // Reverse the animation after each repeat
  });
});
```
