# animation gsap scrollTrigger

> ScrollTrigger를 사용하는 방법에는 gsap.to 방식, gsap.timeline 방식, ScrollTrigger.create 방식이 있다.

## setup

```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

## trigger

> element 요소, selector를 사용할 수 있다.

```txt
trigger: ele,
trigger: ".container",
```

## start / end

> top, center, bottom, numeric, px, % 등을 사용할 수 있다.

```txt
start: "top top"
start: "80% 80%"
start: "top 80%"
start: "center 80%"

end: "top top"
end: "80% 80%"
end: "top 80%"
end: "center 80%"
```

## scrub

> 마우스의 스크롤 정도에 따라서 애니메이션이 반응

```txt
scrub: 1
```

## pin

> start를 top top으로 설정해야한다.
>
> > > 가장 밖에 있는 루트 container가 트리거인지 확인해라

## markers

> 디버깅을 위한 인디케이터 표시

## toggleActions
