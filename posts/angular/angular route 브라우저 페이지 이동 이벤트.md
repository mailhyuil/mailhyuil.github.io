# angular route 브라우저 페이지 이동 이벤트

## Traditional (밑의 순서대로 발생)

> domcontentloaded 이벤트가 등록되기 전 이미 DOM이 완성되어 이벤트가 발생했다면 이 이벤트는 발생하지 않는다
>
> 예를 들어 angular app component 내에 등록 시 domcontentloaded 이벤트는 발생하지 않는다
>
> 이때는 main.ts에 등록을 해주거나 readyState를 사용하는게 좋다.

```txt
domcontentloaded : DOM 트리가 완전히 로드되고 분석되었지만 스타일시트, 이미지 및 하위 프레임의 로드가 완료되지 않았을 때

load : 페이지의 모든 리소스가 로드되었을 때 (SPA에서는 한번만 발생)
pageshow : load된 이후에는 pageshow이벤트 (SPA에서는 한번만 발생)

beforeunload : 페이지가 언로드되기 전에 (SPA에서의 페이지 이동 시에는 발생하지 않음 / 그 사이트를 완전히 떠날 때만 발생)
pagehide : 페이지가 캐시되어 있으면 다른 페이지로 교체될 때 (SPA에서의 페이지 이동 시에는 발생하지 않음 / 그 사이트를 완전히 떠날 때만 발생)
unload : 페이지가 언로드되었을 때 (SPA에서의 페이지 이동 시에는 발생하지 않음 / 그 사이트를 완전히 떠날 때만 발생)
```

# History API

> SPA에서는 기본으로 History API의 pushState를 사용하므로 뒤로가기 시 이 이벤트가 발생함
>
> > pushstate는 존재하지 않는다.

```txt
popstate : 브라우저의 세션 히스토리가 변경될 때
```

# optional

```txt
transitionstart : CSS transition이 start하면 동작
transitionend : CSS transition이 end하면 동작

persisted : 페이지가 로드 또는 새로고침이 아니라 복원되었을 경우에 true이다
```
