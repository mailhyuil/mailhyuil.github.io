# angular SSR Location

> @angular/common의 Location을 사용

## LocationService

```ts
import { Location } from "@angular/common";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  public location = inject(Location);
  get search() {
    return this.location.path(true).split("?")[1];
  }
}
```

## usage

```ts
Object.fromEntries(new URLSearchParams(this.location.search).entries());
```
