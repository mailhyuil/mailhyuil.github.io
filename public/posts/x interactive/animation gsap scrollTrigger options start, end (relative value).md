# gsap ScrollTrigger

> top, center, bottom, numeric, px, % 등을 사용할 수 있다.
>
> > start: "[trigger의 위치], [window viewport의 위치]"

```txt
start: "top top"
start: "80% 80%"
start: "top 80%"
start: "center 80%"
start: "bottom bottom"
start: "+=300vh" // 현재 위치에서 300vh만큼 이동한 지점이 start

end: "top top"
end: "80% 80%"
end: "top 80%"
end: "center 80%"
end: "+=300vh" // start 지점으로부터 스크롤이 300vh만큼 이동하면 end

// 동적으로 값을 넣을 시
end: () => `+=${elem.offsetHeight}`
```
