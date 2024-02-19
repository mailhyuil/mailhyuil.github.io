# angular server side code

> angular는 서버사이드 코드가 클라이언트사이드 코드와 섞여있다.
>
> > isPlatformServer를 사용해서 분기처리를 해야한다.

```ts
import { isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "ssr-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  data: any;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private readonly transferState: TransferState, private readonly httpClient: HttpClient) {
    const isServer = isPlatformServer(platformId);
    if (isServer) {
      // ServerSide Logic
      this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1").subscribe((res: any) => {
        this.data = res;
        this.transferState.set(makeStateKey("test"), res);
        console.log("data is rendered in server", res);
      });
    }
  }
  ngOnInit(): void {
    // ClientSide Logic
    this.data = this.transferState.get<{ data: string }>(makeStateKey("test"), {
      data: "default value here",
    });
    console.log("data from server", this.data);
  }
}
```
