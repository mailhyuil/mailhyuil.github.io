# angular server side code

> angular는 서버사이드 코드가 클라이언트사이드 코드와 섞여있다.
>
> > isPlatformServer를 사용해서 분기처리를 해야한다.

```ts
import { PLATFORM_ID, Inject, Injectable } from "@angular/core";
@Injectable()
export class SomeService {
  isServer: boolean;
  data: any;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private readonly transferState: TransferState) {
    this.isServer = isPlatformServer(platformId);
    if (this.isServer) {
      // ServerSide Logic
      this.httpClient.get("http://localhost:8080/data").subscribe((r: any) => {
        this.data = r;
        this.transferState.set(dataKey, r); //<--- add this line to save the state
        console.log("data is rendered", r);
      });
    }
    this.data = this.transferState.get<{ data: string }>(dataKey, { data: "" });
  }
}
```
