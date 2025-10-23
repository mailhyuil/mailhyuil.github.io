# animation gsap position parameter

```js
// gsap.to( target, vars, **position** )

tl.to(".class", { x: 100 }, 3); // start 로부터 3초 후에 실행

tl.to(".class", { x: 100 }, "someLabel"); // someLabel 위치에 실행 (addLabel("someLabel", 2) was called previously)

tl.to(".class", { x: 100 }, "<"); // 앞에 있는 animation의 시작점에 실행

tl.to(".class", { x: 100 }, ">"); // 앞에 있는 animation의 끝점에 실행

+=1  // timeline의 끝점으로부터 1초 후에 실행
-=1  // timeline의 끝점으로부터 1초 전에 실행
someLabel+=2  // someLabel 위치로부터 2초 후에 실행
<+=3  // 이전 animation의 시작점으로부터 3초 후에 실행
<3  // 이전 animation의 시작점으로부터 3초 후에 실행
>-3  // 이전 animation의 끝점으로부터 0.5초 전에 실행
-=25% // overlap with the end of the timeline by 25% of the inserting animation's total duration // timeline의 끝점으로부터 25%만큼 앞으로 이동해서 실행
```
