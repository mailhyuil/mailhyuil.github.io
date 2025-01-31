# testing angular Component

```ts
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from "@angular/core/testing";
import { ExampleComponent } from "./example.component";

describe("ExampleComponent", () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExampleComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }], // fixture.detectChanges(); 을 자동으로 해주는 옵션
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should set 'test' in value signal", () => {
    component.setValue("test");
    expect(component.value()).toEqual("test");
  });

  it("should display updated value in input after detectChanges", () => {
    component.setValue("test");
    const value = fixture.nativeElement.querySelector("input").value;
    expect(value).toEqual("test");
  });
});
```
