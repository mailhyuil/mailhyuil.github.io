# html 요소 scrollTo

```js
const body = document.querySelector("#body");

const ele = eles.find((ele) => ele.index === index);

const top = ele.getBoundingClientRect().top + body.scrollTop - body.clientTop - 100;

if (body) {
  body.scrollTo({
    top: top,
    behavior: "smooth",
  });
}
```
