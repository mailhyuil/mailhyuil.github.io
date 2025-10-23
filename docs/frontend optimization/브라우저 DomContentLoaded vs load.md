# 브라우저 DomContentLoaded vs load

> domContentLoaded -> load 순서

## DomContentLoaded

> DOM트리가 완성된 후 발생하는 이벤트
>
> > html 파일만 관련이 있다.
> >
> > > HTML이 완전히 파싱되었고, defer 속성이 있는 JavaScript가 실행되었다는 것을 의미한다.
> > >
> > > > initial bundle이 전부 로드되어야 한다.
> > > >
> > > > > DomContentLoaded가 발생했다는것은 Above the fold가 완성되었다는 것을 의미한다.
> > > > >
> > > > > > DomContentLoaded 이벤트가 등록되기 전 이미 DOM이 완성되어 이벤트가 발생했다면 이 이벤트는 발생하지 않는다 (e.g. angular app component 내에 등록 시)
> > > > > >
> > > > > > 이때는 readyState를 사용하는게 좋다.

## load

> 모든 리소스가 로드된 후에 발생하는 이벤트
>
> > 영상의 경우 아직 다운로드 중일 수 있다.
