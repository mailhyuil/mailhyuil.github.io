# angular strategy pattern

## test.service.ts

```ts
export abstract class TestService {
  abstract test(): void;
  doSomething() {
    this.test();
    console.log("doing something");
  }
}
```

## test-a.service.ts

```ts
import { Injectable, InjectionToken } from "@angular/core";
import { TestService } from "./test.service";
export const TEST_A_SERVICE = new InjectionToken<TestAService>("TEST_A_SERVICE");

@Injectable()
export class TestAService extends TestService {
  test(): void {
    console.log("test-a");
  }
}
```

## test-b.service.ts

```ts
import { Injectable, InjectionToken } from "@angular/core";
import { TestService } from "./test.service";
export const TEST_B_SERVICE = new InjectionToken<TestBService>("TEST_B_SERVICE");

@Injectable()
export class TestBService extends TestService {
  test(): void {
    console.log("test-b");
  }
}
```

## test.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Injector, OnInit, inject, input } from "@angular/core";
import { TEST_A_SERVICE, TestAService } from "./test-a.service";
import { TEST_B_SERVICE, TestBService } from "./test-b.service";
import { TestService } from "./test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: TEST_A_SERVICE,
      useClass: TestAService,
    },
    {
      provide: TEST_B_SERVICE,
      useClass: TestBService,
    },
  ],
})
export class TestComponent implements OnInit {
  type = input(TEST_A_SERVICE);
  injector = inject(Injector);
  testService?: TestService;
  TEST_A_SERVICE = TEST_A_SERVICE;
  TEST_B_SERVICE = TEST_B_SERVICE;
  ngOnInit(): void {
    const type = this.type();
    if (type) {
      this.testService = this.injector.get<TestService>(type);
    }
  }
  test() {
    this.testService?.doSomething();
  }
}
```

## test.component.html

```ts
@switch (type()) {
  @case (TEST_A_SERVICE) {
    <div>type is a</div>
  }
  @case (TEST_B_SERVICE) {
    <div>type is b</div>
  }
  @default {
    <div>type is default</div>
  }
}
<button (click)="test()">click me</button>
```
