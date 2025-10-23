# html script defer vs async

> script 태그에 막혀서 html을 파싱하지 못하는 문제를 해결하기 위해 나온 속성들
>
> > script를 맨 아래 두는 방법을 사용하면 html이 큰 경우 스크립트 다운로드 시작 시간이 늦어져서 페이지 로딩 시간이 느려질 수 있다.

## defer

> 스크립트를 백그라운드에서 다운로드
>
> > 따라서 다운로드 중에도 html 파싱이 멈추지 않는다.
> >
> > > defer script는 DOM parsing이 끝날 때 실행된다.
> > >
> > > > defer script가 다 다운로드 받아지고 실행되어야 DOMContentLoaded 이벤트가 발생한다.
> > > >
> > > > > defer script는 외부 js 파일에만 유효하다. src가 반드시 있어야한다.
> > > > >
> > > > > > defer가 실행되기 전 페이지가 화면에 출력된다. 따라서 defer를 스크립트가 영향을 주는 view에는 loading spinner 등을 사용해야한다.

## async

> 스크립트를 백그라운드에서 다운로드
>
> > DOM parsing과 독립적으로 실행된다.
> >
> > 즉 DOMContentLoaded 이벤트 전이나 후 어느때나 실행될 수 있다.
> >
> > > 동적으로 추가한 script는 async로 동작한다.
> > >
> > > > async는 방문자 수 카운터나 광고 관련 스크립트같이 독립적인 스크립트에 사용

```js
let script = document.createElement("script");
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // (여기서 바로 다운로드가 시작됨)
```
