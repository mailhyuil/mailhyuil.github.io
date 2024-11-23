# animation split text (splitting)

> text를 글자 단위, 단어 단위, 줄 단위로 나누어 배열로 반환해주는 라이브러리

## install

```sh
npm i splitting
```

## usage

```js
const ele = document.querySelector(".text");

const res = Splitting({ target: ele });

res.forEach(item => {
  item.chars.forEach(char => {
    char.style.opacity = 0;
    char.style.transition = "opacity 1s";
  });
});
```
