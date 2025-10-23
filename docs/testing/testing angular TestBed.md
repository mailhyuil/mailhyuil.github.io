# TestBed

> The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
>
> > TestBed는 @NgModule을 흉내내는 동적으로 구성된 Angular 테스트 모듈을 생성합니다.
> >
> > > 의존성 주입을 테스트하기 위해 사용합니다.
> > >
> > > > createComponent()를 사용하여 Fixture를 생성합니다.

```ts
import { TestBed } from "@angular/core/testing";
import { TestService } from "./test.service";
import { TestComponent } from "./test.component";

describe("TestService", () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: TestService;
  let component: TestComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [TestService],
    }).createComponent(TestComponent); /// createComponent() : Fixture를 생성

    service = TestBed.inject(TestService);
    component = TestBed.componentInstance;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
```
