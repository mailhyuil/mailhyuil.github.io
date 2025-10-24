# js context 실행컨텍스트 this vs self vs globalThis

> 항상 전역객체를 가리키는 변수

## this vs self

> this는 현재 실행컨텍스트의 thisValue를 가리킴 (전역객체가 아닐 수도 있음)
>
> > self는 "웹브라우저환경"에서는 WebProxy로써 "전역객체"(window)를 읽기전용으로 가리킴
> >
> > self는 "웹워커환경"에서는 워커의 "전역 객체"를 참조
> >
> > self는 "다른 환경"에서는 this 바인딩 문제를 피하기 위한 일종의 트릭으로 사용되며, 변수이 이름일 뿐이다.

```txt
즉, self는 전역객체 담고있는 변수이다.
(this는 항상 전역객체를 가리키지 않기 때문에)
```

## globalThis

> self와 같은 기능
>
> > nodejs에는 self가 없어서 새로 도입된 전역객체를 가리키는 변수
> >
> > > window, self 등 유사한 속성과는 다르게 window와 non-window 컨텍스트 모두에서의 동작을 보장합니다. 따라서 코드를 구동하는 환경을 모르더라도 전역 객체에 일관된 방식으로 접근할 수 있습니다.
