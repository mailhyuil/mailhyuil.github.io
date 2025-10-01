# initial bundle & lazy loading & tree shaking & secondary entry points

## initial bundle

> 애플리케이션을 로드할 때 필요한 모든 코드를 포함하는 번들을 의미한다.

## lazy loading

> 코드를 청크로 나눠서 필요한 코드만 최초에 로드하고 나머지는 필요할 때 로드하는 기법
>
> > initial bundle size를 줄일 수 있는 기법이지만 코드가 포함된 모듈에 여러 다른 코드가 포함되어 있다면 전부 "initial bundle"에 포함되어 버린다..

## secondary entry points

> 모듈(라이브러리)에 포함된 코드는 청크로 나뉘어 있더라도 전부 initial bundle에 포함되어 버린다.
>
> > secondary entry points를 사용하여 initial bundle에 포함되면 안되는 코드들을 분리할 수 있다.
> >
> > > 애플리케이션이 처음 로드될 때 불필요한 코드를 포함하지 않도록 하여 초기 번들 크기를 줄이는 방법.

## tree shaking

> 개발에 사용한 전체 코드에서 실제로 사용하는 코드만 남기고 제거하는 기법
