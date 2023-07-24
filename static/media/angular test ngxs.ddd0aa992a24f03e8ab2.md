# ngxs testing

```ts
import { TestBed } from "@angular/core/testing";

describe("Zoo", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ZooState])],
    });

    store = TestBed.inject(Store);
  });

  it("it toggles feed", () => {
    store.dispatch(new FeedAnimals());

    const feed = store.selectSnapshot((state) => state.zoo.feed);
    expect(feed).toBe(true);
  });
});
```
