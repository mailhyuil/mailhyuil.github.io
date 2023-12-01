# ngrx effects

> 비동기로 동작하는 service의 task를 action을 통해 호출, dispatch한다. (ajax, websocket, ...)
>
> > effect는 action을 받아서 service를 호출하고, service의 결과를 action으로 dispatch한다.

## install

```sh
npm i @ngrx/effects
```

## store/count.effects.ts

```ts
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { CountService } from "./count.service";

@Injectable()
export class CountEffects {
  constructor(private actions$: Actions, private countService: CountService) {}

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Count] Load Count"),
      exhaustMap(() =>
        this.countService.get().pipe(
          map((count) => ({ type: "[Count] Count Loaded Success", payload: count })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
```
