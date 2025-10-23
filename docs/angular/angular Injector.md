# angular Injector

> root ModuleInjector -> NullInjector -> PlatformInjector
>
> > ComponentInjector -> ElementInjector
> >
> > > provider를 찾을 때는 ElementInjector를 따라 올라가서 찾고 없으면 다시 원점으로 돌아와 ModuleInjector에서 찾는다.

## ModuleInjector 계층

> @NgModule, @Injectable이 등록된다.
>
> > PlatformInjector : ModuleInjector 계층의 최상위 인젝터
> >
> > > ModuleInjector, NullInjector가 등록된다.
> > >
> > > > bootstrapModule()을 호출하면 root ModuleInjector가 생성된다.
> > > >
> > > > > platformBrowserDynamic() 메소드를 사용하면 PlatformModule 설정에 따라 인젝터를 생성

```ts
// ModuleInjector 계층에 등록
@NgModule({
  providers: [MyService], // 서비스를 프로바이더로 등록
})
```

```ts
// ModuleInjector 계층에 등록
// standalone 방식
bootstrapApplication(AppComponent, {
  providers: [MyService],
}).catch(err => console.error(err));
```

## ElementInjector 계층

> @Component, @Directive이 등록된다.

```ts
// ElementInjector 계층에 등록
@Component({
  providers: [MyService], // 서비스를 프로바이더로 등록
})
```

## 의존성 토큰 결정 규칙

> 데코레이터를 사용하여 의존성 토큰을 결정하는 규칙을 변경할 수 있다.
>
> > 기본으로 의존성 주입을 요구한 계층의 Injector 부터 탐색을 시작

```ts
@Optional // 프로바이더를 찾지 못하면 생략해도 된다는 의미 // 찾지 못하면 null을 주입
@SkipSelf // 현 계층을 건너뛰고 부모 계층에서 탐색을 시작
@Self // 현 계층에서만 탐색을 시작
@Host // Host에서만 탐색 // Host란 현재 컴포넌트를 의미
```

## injector.get()

> inject() 함수와 같은 역할
>
> > token의 인스턴스를 반환한다.

```ts
injector = inject(Injector);

const { ModalService } = await import("@mailhyuil/ng-libs");
const modalService = this.injector.get(ModalService);
```
