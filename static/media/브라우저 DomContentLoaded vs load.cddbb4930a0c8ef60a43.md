# 브라우저 DomContentLoaded vs load

> domContentLoaded -> load 순서

## DomContentLoaded

> DOM트리가 완성된 후 발생하는 이벤트
>
> > html 파일만 관련이 있다.
> >
> > > 이미지, CSS, JS 등의 리소스는 로드되지 않았어도 실행된다.

## load

> 모든 리소스(initial bundle)(css, images, script..)가 로드된 후에 발생하는 이벤트
>
> > 리소스가 많을 경우 성능 저하
> >
> > > defer 옵션, lazy loading, multiple entry point 등을 사용하여 initial bundle size를 줄이는 것이 중요하다.
