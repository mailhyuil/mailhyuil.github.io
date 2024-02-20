# angular SSR data caching

```ts
import { CommonModule, isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, PLATFORM_ID, TransferState, inject, makeStateKey } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

const key = makeStateKey<string>("home");

@Component({
  selector: "ssr-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  route = inject(ActivatedRoute);
  platformId = inject(PLATFORM_ID);
  transferState = inject(TransferState);
  data: any;
  ngOnInit(): void {
    if (this.transferState.hasKey(key)) {
      // 서버에서 받아온 데이터가 존재하면 데이터를 사용한다.
      this.data = this.transferState.get(key, null);
    } else {
      // 데이터가 없다면 데이터를 서버에서 받아온다.
      if (isPlatformServer(this.platformId)) {
        this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${this.route.snapshot.params["id"]}`).subscribe((data) => {
          this.transferState.set(key, data);
          this.data = data;
        });
      }
    }
  }
}
```

## 새로운 데이터를 받아오는 방법

> 위의 코드를 내부적으로 알아서 처리해줌

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
  ],
};
```
