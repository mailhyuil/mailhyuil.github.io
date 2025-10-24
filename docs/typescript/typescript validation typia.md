# typescript validation typia

## install

```sh
npm i -D typia
npx typia setup
```

## usage

```ts
import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
}

const member = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  email: "mailhyuil@gmail.com",
  age: 20,
};

typia.assert<IMember>(member); // OK
```
