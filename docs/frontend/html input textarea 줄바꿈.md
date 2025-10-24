# html input textarea 줄바꿈

```js
const sendBtnElement = document.querySelector(".btn-send");
const textareaElement = document.querySelector(".textarea");

sendBtnElement.addEventListener("click", () => {
  sendMessage();
});
textareaElement.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    if (!e.shiftKey) {
      sendMessage();
    }
  }
});

let text = document.querySelector(".textarea").value;

text = text.replaceAll(/(\n|\r\n)/g, "<br>"); // 개행문자 <br/>로 바꾸기

text.replaceAll(/(\n|\r\n)/g, "<br>");
```
