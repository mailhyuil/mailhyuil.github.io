# webpack optimization

## providedExports

> webpack4에서 추가된 기능으로, 모듈에서 어떤 export가 제공되는지 파악합니다.
>
> > import \* as \_ from 'lodash-es'로 코드를 써도 웹팩이 어떤 메소드를 사용했는지 파악하고 해당 메소드만 번들링합니다.
> >
> > > 기본적으로 optimization.providedExports가 활성화됩니다.

## usedExports

> export 되지 않은 모듈은 제거한다.
