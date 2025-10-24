# rxjs multicasting shareReplay - cache - auto-refresh

> timer를 사용

```js
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const REFRESH_INTERVAL = 1000 * 60 * 5; // 5분
@Injectable({
  providedIn: 'root',
})
export class HomeService implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly cache$: Observable<any>;
  private readonly refresh$ = new Subject<void>();

  ngOnDestroy (){
    this.refresh$.next();
    this.refresh$.complete();
  }

  findAll(): Observable<any> {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(
        switchMap(() => this.http.get<any>('https://api.example.com/data')),
        shareReplay(1),
        takeUntil(this.refresh$)
      );
    }
    return this.cache$;
  }

  refresh(){
    this.cache$ = null;
    this.refresh$.next();
  }

  refreshAndFindAll(){
    this.refresh();
    return this.findAll();
  }
}
```
