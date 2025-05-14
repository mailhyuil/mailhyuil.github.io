# Navigation timing 최적화

> domContentLoadedEventStart -> domContentLoadedEventEnd -> loadEventStart -> loadEventEnd 순으로 브라우저가 html을 파싱하는 과정을 거친다.
>
> > Processing (domContentLoadedEventStart, domContentLoadedEventEnd) : DOM 트리를 완성하는 시간 (html을 파싱하는 시간)
> >
> > > Load (loadEventStart, loadEventEnd) : 모든 리소스를 로드하는 시간

## Processing 최적화

> 블록 리소스를 줄여라
>
> > html을 파싱하는 과정에서 블록 리소스를 만나면 html 파싱을 멈추고 블록 리소스를 다운로드 한다.
> >
> > > css와 js는 블록 리소스이다.
> > >
> > > > 브라우저 기준 최적화

### js 최적화

> script에 async, defer 속성을 추가하면 블록 리소스가 아니게 된다.

### css 최적화

> link를 사용하지 말고 inline style tag을 사용하자.

## Load 최적화

> 사용자 기준 최적화 (더 중요!)
>
> > First Meaningful Paint가 중요하다 (SSR 또는 프리렌더러로 구현)
> >
> > > SSR:런타임에 HTML+CSS를 생성
> > >
> > > > Pre-rendering: 빌드 타임에 HTML+CSS를 생성 (웹팩 prerender-loader)
