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

## load

> 모든 리소스가 로드된 후에 발생하는 이벤트
