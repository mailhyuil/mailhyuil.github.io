# 브라우저 강제 동기 레이아웃 - forced reflow

> layout === reflow
>
> > 브라우저는 일반적으로 현재 작업이나 프레임이 끝날 때까지 기다린 후 리플로우를 계산하지만, 특정 기하학적인 속성 값을 읽으면 최신 값을 계산하기 위해 리플로우를 동기적으로 발생시킵니다.

## 잘못된 예시

> 값을 읽기만 해도 레이아웃 계산은 강제로 다시 발생한다 (레이아웃 스레싱)

```js
function draw() {
  let offsetX = this.element.offsetLeft;
  let offsetY = this.element.offsetTop;
  let containerWidth = this.element.parentElement.offsetWidth;
}
```

## 올바른 예시

> 캐싱을 통해 레이아웃 계산을 최소화 한다

```js
function draw() {
  let offsetX = this.x;
  let offsetY = this.y;
  let containerWidth = this.containerWidth;
}
```
