# base source map

> 변환된 코드를 원본 코드로 매핑해주는 파일
>
> > 디버깅을 위해 사용
> >
> > > browser 환경에서 source-map이 적용되어 있다면 devtool의 source 탭에서 원본 코드를 볼 수 있다.
> > >
> > > > node 환경에서는 source-map이 필수적으로 필요하다.
> > > >
> > > > source-map-support 라이브러리를 사용해야 Node.js 런타임에서 소스 맵을 처리하여 stack trace를 원래 소스 코드로 매핑해줍니다.
