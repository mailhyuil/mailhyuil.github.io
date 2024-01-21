# angular APP_INITIALIZER

> useFactory는 function을 반환하는 함수이다.

## auth.service.ts

```ts
import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { IAdminDTO } from "@wings/libs";
import { lastValueFrom } from "rxjs";
import { SetAdmin } from "../store/auth.store";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private readonly store: Store, private readonly httpService: HttpService) {}
  async getAuth() {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (!accessToken) return;
    const admin = await lastValueFrom(this.httpService.get<IAdminDTO>("auth"));
    this.store.dispatch(new SetAdmin(admin));
  }
}
```

## app.module.ts

```ts
{
  provide: APP_INITIALIZER,
  useFactory: (authService: AuthService) => async () => {
    return await authService.getAuth();
  },
  deps: [AuthService],
  multi: true,
},
```
