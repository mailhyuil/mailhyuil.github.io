# angular test

## test 파일 생성

```sh
npm install ngx-spec

ng g ngx-spec:spec components/child/child.component.ts
```

## test 파일

> standalone은 declaration 대신 imports 사용
>
> > fixture란 중복 발생되는 무언가(행위)를 고정시켜 한곳에 관리하도록 하겠다는 개념.
> >
> > > TestBed란 부품이 시스템 내에서 원활히 작동하는지를 실험하는 시스템이라는 개념.

```ts
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SomeComponent } from "./child-one.component";

describe("SomeComponent", () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SomeComponent],
    });
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("onClick() should [do something]", () => {
    component.onClick();
    expect(component.someValue).toBeTruthy();
  });
});
```
