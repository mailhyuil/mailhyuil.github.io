# rxjs shareReplay cache

> timer를 사용

```js
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const REFRESH_INTERVAL = 1000 * 60 * 5; // 5분
const CACHE_SIZE = 1;
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  private cache$: Observable<any>;

  constructor() {}

  request(){
    return this.http.get<any>('https://api.example.com/data')
  }

  getData(): Observable<any> {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);

      this.cache$ = timer$.pipe(
        switchMap((_) => this.request()),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  refresh(){
    this.cache$ = this.request().pipe(
        shareReplay(CACHE_SIZE)
      );
    return this.cache$;
  }
}
```
