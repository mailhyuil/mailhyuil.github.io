# 페이지 전환 이벤트

> a 태그로 페이지를 바꾸지 않고 click 이벤트를 통해 js에서 transition이 끝나면 페이지를 전환시켜준다.

## event

```
ontransitionend : transition이 end하면 동작
ondomcontentloaded : content가 load되면 동작
onload :
onunload :
onbeforeload :
onbeforeunload :
window.onpageshow : 처음 load된 이후에는 pageshow이벤트
window.onpagehide : 페이지가 캐시되어 있으면 다른 페이지로 교체될 때
event.persisted : 페이지가 로드 또는 새로고침이 아니라 복원되었을 경우에 true이다
```

## html

```html
<body class="opacity-0  transition-all duration-1000">
  <h1 class="opacity-100 text-6xl">안녕</h1>
  <a class="opacity-100 text-6xl cursor-pointer" href="change.html">바꾸기</a>
</body>
<div class="paging fixed w-full h-[200vh] bg-red-200 -bottom-[200vh] transition-all duration-1000"></div>
<script>
  const body = document.querySelector("body");
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      console.log("This page was restored from the bfcache.");
    } else {
      console.log("This page was loaded normally.");
    }

    body.classList.remove("opacity-0");
    body.classList.add("opacity-100");
  });
  document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    const paging = document.querySelector(".paging");
    paging.classList.add("-translate-y-[200vh]");
    body.classList.remove("opacity-100");
    body.classList.add("opacity-0");
    body.ontransitionend = () => {
      location.href = "change.html";
    };
  });
</script>
```
