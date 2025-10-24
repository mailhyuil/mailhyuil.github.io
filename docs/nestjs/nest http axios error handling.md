# nest http axios error handling

```ts
import { catchError } from "rxjs/operators";

this.http.get(url).pipe(
  catchError((err) => {
    console.error(err);
    throw new HttpException(
      err.response.data.["메세지에 해당하는 필드"],
      err.response.status,
      {
        cause: err,
        description: err.response.data.['상세에 해당하는 필드'],
      },
    );
  })
);
```
