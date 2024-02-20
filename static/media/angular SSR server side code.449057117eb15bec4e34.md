# angular server side code

> angular는 서버사이드 코드가 클라이언트사이드 코드와 섞여있다.
>
> > isPlatformServer를 사용해서 분기처리를 해야한다.

```ts
import { CommonModule, isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit, PLATFORM_ID, TransferState, inject, makeStateKey } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
const key = makeStateKey<string>("home");
@Component({
  selector: "ssr-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class HomeComponent implements OnInit, OnDestroy {
  httpClient = inject(HttpClient);
  route = inject(ActivatedRoute);
  platformId = inject(PLATFORM_ID);
  isServer = isPlatformServer(this.platformId);
  transferState = inject(TransferState);
  data: any;
  constructor() {
    if (this.isServer) {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${this.route.snapshot.params["id"]}`).subscribe((data) => {
        this.data = data; // data가 html파일에 삽입됨
        this.transferState.set(key, data);
      });
    }
  }

  ngOnInit(): void {
    if (!this.isServer) {
      this.data = this.transferState.get(key, null); // 서버의 데이터를 클라이언트로 전달 및 hydrate
      this.transferState.remove(key);
    }
  }

  ngOnDestroy(): void {}
}
```
