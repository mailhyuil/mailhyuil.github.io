# angular signal resource

> Most signal APIs are synchronous (signal, computed, input, etc)
>
> > 하지만 앱은 간홍 비동기로 데이터를 가져와야할 때가 있는데 이때 resource를 사용하면된다.

## some.component.ts

```ts
@Component({})
export class SomeComponent {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    name: this.fb.control(""),
    email: this.fb.control(""),
  });
  data = resource({
    params: () => ({ id: this.id() }),
    loader: ({ params, abortSignal, previous }) => {
      const res = fetch(`https://api.example.com/users/${params.id}`, {
        signal: abortSignal,
      });
      const data = res.json();
      this.form.patchValue(data);
      return Promise.resolve(data);
    },
    defaultValue: { name: "", email: "" },
  });
}
```

## some.component.html

```html
{{ data.value().name }}
```

## user.service.ts

```ts
import { resource, Signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private readonly http: HttpClient) {}
  me = resource({
    loader: () => fetch("https://api.example.com/users/me"),
  });
}
```
