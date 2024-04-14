# nestjs axios error handling

```ts
import { catchError } from "rxjs/operators";

this.http.get(url).pipe(
  catchError((e) => {
    throw new HttpException(e.response.data, e.response.status);
  })
);
```
