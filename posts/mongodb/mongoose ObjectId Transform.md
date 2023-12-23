# mongoose ObjectId Transform

```ts
import { Transform } from "class-transformer";
export function MongoId(): PropertyDecorator {
  return Transform(({ obj }) => obj._id.toString());
}
```
