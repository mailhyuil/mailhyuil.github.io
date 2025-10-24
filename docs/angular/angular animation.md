# angular animation

> state machine의 개념을 사용하여 상태에 따라 다른 애니메이션을 적용할 수 있다.

## BrowserAnimationModule

```ts
bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));
```

## 기초

```ts
* => *               // captures a state change between any states
void => * === :enter // captures the entering of elements
* => void === :leave // captures the leaving of elements
0 => 1               // captures a numeric value change from 0 to 1
1 => 0               // captures a numeric value change from 1 to 0
'shown' => 'hidden'  // state가 'shown'에서 'hidden'으로 바뀔 때
'hidden' => 'shown'  // state가 'hidden'에서 'shown'으로 바뀔 때

query() // 애니메이션 할 element를 선택
stagger() // 여러 element에 애니메이션을 적용할 때 간격을 두는 것
group() // 여러 애니메이션을 동시에 실행 (병렬)
sequence() // 여러 애니메이션을 순차적으로 실행 (직렬)
animation() // 재사용 가능한 애니메이션을 만들 수 있음
useAnimation() // animation()으로 만든 애니메이션을 사용
animateChild() // child element에 애니메이션을 적용

trigger()
transition()
state()
style()
animate()
```

## usage

```ts

```
