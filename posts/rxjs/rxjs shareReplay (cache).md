# rxjs shareReplay cache

> 구독자들(컴포넌트에게) 서비스에서 Observable을 넘겨서 구독하게 하고 shareReplay를 사용하면 캐시된 데이터를 보내준다.
>
> > 데이터를 refresh할 때는 서비스의 Observable을 바꿔준다.
> >
> > > share와 다른 점은 http 요청을 계속날리지 않고 캐시된 데이터로 공유한다는 점

```js
shareReplay(1);
// ===
shareReplay({ bufferSize: 1, refCount: false });
```

## 사용

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cachedData$: Observable<any>;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (!this.cachedData$) {
      this.cachedData$ = this.http.get<any>('https://api.example.com/data').pipe(
        shareReplay(1) // 데이터를 캐시하고 여러 구독자 간에 재사용
      );
    }
    return this.cachedData$;
  }

  refresh(){
    this.cachedData$ = this.http.get<any>('https://api.example.com/data').pipe(
        shareReplay(1)
      );
  }
}
```
