# testing angular TestBed override

> The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
>
> > TestBed는 @NgModule을 흉내내는 동적으로 구성된 Angular 테스트 모듈을 생성합니다.
> >
> > > 의존성 주입을 테스트하기 위해 사용합니다.
> > >
> > > > nestjs에서는 Test라는 객체를 사용합니다.

```ts
TestBed.configureTestingModule({
  providers: [TestService],
})
  .overrideProvider()
  .useClass()
  .overrideComponent()
  .useClass()
  .overrideTemplate()
  .useClass()
  .overrideDirective()
  .useClass()
  .overridePipe()
  .useClass()
  .compileComponents();
```
