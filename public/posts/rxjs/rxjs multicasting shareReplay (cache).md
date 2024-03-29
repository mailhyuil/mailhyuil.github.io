# rxjs shareReplay cache

> 구독자들(컴포넌트에게) 서비스에서 Observable을 넘겨서 구독하게 하고 shareReplay를 사용하면 캐시된 데이터를 보내준다.
>
> > The shareReplay operator automatically creates a ReplaySubject between the original source and all future subscribers.
> >
> > 내부적으로 ReplaySubject를 생성하고 캐시된 데이터를 보내준다.
> >
> > > share와 다른 점은 http 요청을 계속날리지 않고 캐시된 데이터로 공유한다는 점

```js
shareReplay(1);
// === //
shareReplay({ bufferSize: 1, refCount: false });
```

## 사용

```js
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  private cache$: Observable<any>;

  constructor() {}

  getData(): Observable<any> {
    if (!this.cache$) {
      this.cache$ = this.http.get<any>('https://api.example.com/data').pipe(
        shareReplay(1) // 데이터를 캐시하고 여러 구독자 간에 재사용
      );
    }
    return this.cache$;
  }

  refresh(){
    this.cache$ = this.http.get<any>('https://api.example.com/data').pipe(
        shareReplay(1)
      );
    return this.cache$;
  }
}
```

```ts
import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class HomeComponent implements OnInit {
  homeService = inject(HomeService);
  data: any;
  constructor() {}
  ngOnInit(): void {
    this.homeService.getData().subscribe((res) => {
      this.data = res;
    });
  }
  refresh() {
    this.homeService.refresh().subscribe((res) => {
      this.data = res;
    });
  }
}
```
