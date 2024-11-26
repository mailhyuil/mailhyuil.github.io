# angular Signals resource

> Most signal APIs are synchronous (signal, computed, input, etc)
>
> > 하지만 앱은 간홍 비동기로 데이터를 가져와야할 때가 있는데 이때 resource를 사용하면된다.

## usage

```ts
import { resource, Signal } from "@angular/core";

const userId: Signal<string> = getUserId();

const userResource = resource({
  // Define a reactive request computation.
  // The request value recomputes whenever any read signals change.
  request: () => ({ id: userId() }),
  // Define an async loader that retrieves data.
  // The resource calls this function every time the `request` value changes.
  loader: ({ request }) => fetchUser(request),
});

// Create a computed signal based on the result of the resource's loader function.
const firstName = computed(() => userResource.value().firstName);

userResource.reload();
```
