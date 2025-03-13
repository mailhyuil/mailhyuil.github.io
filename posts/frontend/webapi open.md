# popup

> window.open()으로 새로운 브라우저 창이나 탭을 열 수 있음
>
> > 열린 탭을 부모 window에서 opener를 통해서 참조 가능

```js
window.open(url, target, windowFeatures);

window.open("https://mailhyuil.github.io", "_blank", "width=400,height=300");
```

## target

```txt
_blank // 새로운 탭 (default)
_self // 현재 창
_parent // 부모 창
_top // 최상위 창
_unfencedTop // 최상위 창 (sandbox)
a // 새로운 창
form // form 타겟
```

## windowFeatures

> name=value 형태로 작성
>
> > name만 적을 시 name=true로 간주

```txt
"width=400"
"height=300"
"left=100"
"top=50"
"noopener" // opener 참조 불가능
"noreferrer" // referrer 정보 미포함
"popup" // 팝업 창
```
