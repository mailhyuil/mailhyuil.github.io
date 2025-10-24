# 브라우저 GPU 가속 will-change

[will-change-update](https://github.com/operasoftware/devopera/pull/330)

## css

> 미리 알려야함

```css
/* 변화할 요소와 will-change가 같이 있으므로 적용이 안 됨 */
.box {
  transform: rotate(180deg);
  transition: transform 1s linear;
  will-change: transform;
}

/* hover를 통해서 will-change를 선언 했으므로 적용 됨 */
.box:hover {
  will-change: transform;
}
.box {
  transition: transform 1s linear;
}
.box:active {
  transform: rotate(180deg);
}
```

## 초기화

> 브라우저가 변화에 최적화를 시도하면 일반적으로 비용이 발생합니다. 브라우저는 보통 필요한 경우에 최적화를 실시하고 최적화가 필요가 없으면 다시 원래되로 되돌아 옵니다. 하지만 will-change의 경우는 최적화를 길게 유지하게 됩니다. 그러므로 엘리먼트에 변경이 종료되면 반드시 will-change를 삭제해야 합니다. 그러면 will-change에 사용하고 있던 자원을 회수할 수 있습니다.

```js
// 간단한 예제
// 클릭할 때 애니메이션을 재생할 엘리먼트를 선택합니다.
var el = document.getElementById("element");
// 엘리먼트에 마우스 커서가 올라가면 will-change를 설정합니다.
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);
function hintBrowser() {
  // 애니메이션의 키프레임 블럭을 최적화할 수 있는 속성을 사용합니다.
  this.style.willChange = "transform, opacity";
}
function removeHint() {
  this.style.willChange = "auto";
}
```
