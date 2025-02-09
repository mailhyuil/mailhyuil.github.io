# angular lazy loading initial bundle size 줄이기

1. route 파일을 분리해서 loadChildren로 불러오기
   > 파일을 나눠야 chunk 파일로 생성되어 초기 로딩 시간을 줄일 수 있다.

```ts
{
    path: "",
    component: LayoutComponent,
    loadChildren: () => import("./page.routes").then(m => m.pageRoutes),
},
```

2. 최초 로드되는 모듈, 컴포넌트, 서비스 뿐만 아니라 설정파일등에 포함된 모듈, 컴포넌트, 서비스도 initial bundle에 포함된다.
   > import()문을 사용하여 lazy loading을 적용해라
   >
   > injector를 사용해서 DI를 적용할 수 있다.

```ts
injector = inject(Injector);

const { ModalService } = await import("@mailhyuil/ng-libs");
const modalService = this.injector.get(ModalService);
```
