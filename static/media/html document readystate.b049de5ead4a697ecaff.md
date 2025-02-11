# html document readystate

> document의 로딩 상태를 구독할 수 있는 속성
>
> > 이 속성이 변경될 때 readyStatechange에서 이벤트가 발생된다.
> >
> > > DOMContentLoaded의 대안으로 사용된다.

## state

```txt
uninitialized
loading
interactive: 도큐먼트의 로드가 완료되고 구문 분석은 완료 되었지만 서브 리소스(스크립트, 이미지, 스타일시트, 프레임)은 여전히 로딩 중이다. 상태는 DOMContentLoaded 이벤트가 곧 실행될 것임을 의미한다.
complete: 로드가 완료되었고 *로드(load) 이벤트가 곧 실행될 것임을 나타낸다.
```
