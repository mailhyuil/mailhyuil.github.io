# angular state management rxjs normalize

> combineLatest를 사용하여 구현한다

```ts
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

export interface NormalizedData<T> {
  entities: { [id: string]: T };
  ids: string[];
}

export class SomeService {
  constructor(private httpService: HttpService) {}

  getNormalizedData(): Observable<NormalizedData<any>> {
    return this.httpService.get().pipe(switchMap((data) => of(this.normalize(data))));
  }

  private normalize(data: any[]): NormalizedData<any> {
    const entities: { [id: string]: any } = {};
    const ids: string[] = [];

    data.forEach((item) => {
      entities[item.id] = item;
      ids.push(item.id);
    });

    return { entities, ids };
  }
}
```

## normalizr 사용

```ts
import { schema, normalize } from "normalizr";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

export class SomeService {
  constructor(private httpService: HttpService) {}

  getNormalizedData(): Observable<NormalizedData<any>> {
    return this.httpService.get().pipe(
      switchMap((data) => {
        // Define your schema using normalizr
        const itemSchema = new schema.Entity("items");

        // Use normalizr to normalize the data
        const normalizedData = normalize(data, [itemSchema]);

        // Extract and return the normalized data
        return of(normalizedData);
      })
    );
  }
}
```
