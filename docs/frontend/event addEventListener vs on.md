# event addEventListener vs on

> > addEventListener는 event를 누적한다. 여러 이벤트를 추가하더라도 누적되어 모든 이벤트가 동작

## on

> on은 event를 덮어쓴다 여러곳에서 같은 이벤트 사용 불가

```js
ele.onclick = function () {
  alert("Hello");
};
ele.onclick = function () {
  alert("World");
};
// World만 출력됨
```

## addEventListener

```js
ele.addEventListener("click", function () {
  alert("Hello");
});
ele.addEventListener("click", function () {
  alert("World");
});
// Hello, World 출력됨
```
