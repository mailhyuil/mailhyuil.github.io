# angular Injector

## ModuleInjector 계층

> @NgModule, @Injectable이 등록된다.

## ElementInjector 계층

> @Component, @Directive이 등록된다.

## PlatformInjector 계층

> 최상위 인젝터
>
> > ModuleInjector, NullInjector가 등록된다.
> >
> > > bootstrapModule()을 호출하면 최상위 인젝터가 생성된다.
> > >
> > > > platformBrowserDynamic() 메소드를 사용하면 PlatformModule 설정에 따라 인젝터를 생성
