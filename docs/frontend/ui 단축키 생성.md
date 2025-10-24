# ui 단축키 생성

> document에 keydown 이벤트를 추가하여 단축키를 생성한다.

## 구현

```js
// keyDownMap 생성
const keyDown = {
  c: false,
  p: false,
  s: false,
  Meta: false, // Mac
  Control: false, // Windows
};

// document에 keydown 이벤트를 추가
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  keyDown[e.key] = true;

  // Mac에서는 Meta, Windows에서는 Control과 함께 c를 누르면 실행
  if (keyDown["c"] && (keyDown["Control"] || keyDown["Meta"])) {
    console.log("Shortcut Activated");
  }
});
```
