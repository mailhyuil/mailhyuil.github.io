# ui text splitting

## html

```html
<div>
  <h1 class="text">Netflix</h1>
</div>
```

## css

```css
span {
  display: inline-block;
  opacity: 0;
  transition: all 1s ease;
  color: rgb(31, 16, 243);
  transform: translateY(100px);
}

span.fade {
  opacity: 1;
  color: red;
  transform: translateY(0px);
}
```

## js

```js
const text = document.querySelector(".text"); // h1.fancy 노드 오브젝트
const strText = text.textContent; // Netflix 문자열
const splitText = strText.split(""); // ['N', 'e', 't', 'f', 'l', 'i', 'x'] 배열 오브젝트
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

const fade_in = () => {
  let char = 0;
  let timer = setInterval(() => {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      clearInterval(timer);
    }
  }, 100);
};

const fade_out = () => {
  let char = 0;
  let timer = setInterval(() => {
    const span = text.querySelectorAll("span")[char2];
    span.classList.remove("fade");
    char++;
    if (char === splitText.length) {
      clearInterval(timer);
    }
  }, 100);
};

fade_in();
```
