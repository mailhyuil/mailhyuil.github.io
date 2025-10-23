# nodejs validation zod

## install

```sh
npm i zod
```

## usage

```ts
import { z } from "zod";

// create schema
const User = z.object({
  username: z.string(),
});

// create type
type User = z.infer<typeof User>;

// validate
const form = { username: "Ludwig" };
User.parse(form);
```
