# animation gsap scrollTrigger to

> gsap.to로 구현하는 방법

```js
gsap.to(box1.value.childNodes[0], {
  scrollTrigger: {
    trigger: box1.value, ///타겟 좌표 here 기준
    start: "top top", // trigger의 상단, window의 상단 ***trigger의 상단과 window의 상단이 닿으면 start
    end: "top top", //trigger은 하단, windowdml 상단 ***trigger의 상단과 window의 상단이 닿으면 end
    scrub: 1, //스크롤과의 딜레이 1
  },
  color: "#f00",
  translateX: 100,
});

gsap.to(list.value.childNodes, {
  scrollTrigger: {
    trigger: list.value, ///타겟 좌표 here 기준
    start: "center bottom", //trigger기준 상단, window기준 상단에 닿을 때 (numeric, in pixels)
    end: "center bottom", //시작부분에서 trigger은 제일 하단까지, window는 상단까지 닿으면 효과 종료
    markers: true, //인디케이터 표시
    scrub: 1, //스크롤과의 딜레이 1
  },
  stagger: 0.1, // 각 요소 딜레이
  color: "#f00",
  translateX: 100,
  opacity: 1,
});
```
