# testing angular TestBed createComponent vs compileComponent

## createComponent

> fixture를 생성
>
> > 가장 마지막에 호출되어야 함 (override 이후)

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

## compileComponents

> nx test / ng test 로 테스트 할 경우 필요없음 (cli가 자동으로 호출)
>
> > template, style 등을 컴파일
