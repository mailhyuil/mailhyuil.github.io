# bundle base lazy loading

> code splitting과 dynamic imports를 사용하여 필요한 모듈만 로드하는 방법
>
> > commonjs에는 import() 문이 없으므로 lazy loading을 구현하기 적합하지 않다.
> >
> > > 굳이 commonjs를 사용한다면 require.ensure를 사용해야한다.
> > >
> > > > angular 같은 프로젝트에서 module을 lazy loading하면 자동으로 웹팩에서 code splitting이 발생한다.
