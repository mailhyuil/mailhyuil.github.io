# nodejs validation zod

## install

```sh
npm i zod
```

## usage

```ts
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

UserSchema.parse({ username: "Ludwig" });

type User = z.infer<typeof UserSchema>;
// { username: string }
```
