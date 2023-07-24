# ngrx testing

## provideMockStore

>

```ts
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { cold, hot } from "jasmine-marbles";
import { Observable } from "rxjs";

import { MyEffects } from "./my-effects";
import * as MyActions from "../actions/my-actions";

describe("My Effects", () => {
  let effects: MyEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
        MyEffects,
        provideMockActions(() => actions),
        // other providers
      ],
    });

    effects = TestBed.get(MyEffects);
  });

  it("should work", () => {
    const action = new MyActions.ExampleAction();
    const completion = new MyActions.ExampleActionSuccess();

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot("--a-", { a: action });
    const expected = cold("--b", { b: completion });

    expect(effects.someSource$).toBeObservable(expected);
  });
});
```
